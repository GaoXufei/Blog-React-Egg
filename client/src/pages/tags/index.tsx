import * as React from 'react';
import { NavLink } from 'react-router-dom'
import { getQueryTopics } from '../../request/api';
import * as styles from './index.scss';

export default class Tags extends React.Component<{ location: any }, { list: any, tagName: string, count: number }> {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0,
      list: [],
      tagName: "",
    }
  }

  public async componentDidMount() {
    // 获取tag相关列表
    this.getTags();
  }

  public getTags = async () => {
    // 获取路由组件传过来的值
    const tagObj = this.props.location.state;
    // 请求数据
    const { data } = await (await getQueryTopics(tagObj)).json();
    // 将数据填充state
    this.setState({
      count: data.count,
      list: data.list,
      tagName: tagObj.tag
    })
  }

  public render() {
    const { list, tagName, count } = this.state;
    const isReady = list.length > 0;
    return isReady && (
      <div className={styles.tags}>
        <p className={styles.tagName}>标签：<span>{tagName}</span><i>{count}</i></p>
        <ul className={styles.postsList}>
          {
            list.map((post: any, key: number) => (
              <li key={key}>
                <NavLink to={{ pathname: `/posts/${post.id}` }} >{post.title}</NavLink>
                <span>{post.created_at}</span>
              </li>
            ))
          }
        </ul>
      </div>

    )
  }
}