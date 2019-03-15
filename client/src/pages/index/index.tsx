import * as React from 'react';
import * as styles from './index.scss'

// 页面组件
import Swiper from '../../components/swiper';
import Classification from './classification';
import Fast from './fast';
import Me from './me';
import Posts from './posts'
import Recent from './recent';

// api 获取全部文章
import { getAllTags, getQueryTopics } from '../../request/api';

// 定义滚动条变量
let scrollTop = 0;

export default class Index extends React.Component<{ history: any }, { topics: any, tags: [], news: [] }> {

  constructor(props: any) {
    super(props);
    // state
    this.state = {
      news: [],
      tags: [],
      topics: {},
    }

  }

  public scrollFunc = (isIn?: boolean) => {
    // 获取document对象
    const d = document.documentElement;
    // 根据参数判断
    // 组件销毁时保存scrollTop / 组件激活时读取scrollTop
    isIn ? d.scrollTop = scrollTop : scrollTop = d.scrollTop;

  }

  public async componentDidMount() {
    // 获取tags信息
    this.getRequestTags();
    // 获取新文章
    this.getNewPosts();
  }
  public getRequestTags = async () => {
    const { data } = await (await getAllTags()).json();
    this.setState({ tags: data });
  }
  public getNewPosts = async () => {
    const { data } = await (await getQueryTopics({ limit: 8 })).json();
    this.setState({ news: data.list })
  }
  // http 获取文章列表
  public getRequestPosts = async (query: { page: number, limit?: number }) => {
    // 获取当前滚动条
    this.scrollFunc(false)
    const { data } = await (await getQueryTopics(query)).json();
    this.setState({ topics: data });
    // 数据获取之后赋值滚动条
    this.scrollFunc(true);
  }


  public render() {
    const { tags, topics, news } = this.state;
    return (
      <div className={styles.index}>
        <div className={styles.left_wrap}>
          {/* 关于我 */}
          <Me />
          {/* 文章分类 */}
          <Classification tags={tags} />
          {/* 最近文章 */}
          <Recent list={news} />
          {/* 友情链接 */}
          <Fast />
        </div>
        <div className={styles.right_wrap}>
          <Swiper />
          <Posts list={topics.list} count={topics.count} handlePage={this.getRequestPosts} />
        </div>
      </div>
    )
  }
}