import * as React from 'react';
import { NavLink } from 'react-router-dom';
import * as styles from './posts.scss';

interface IState {
  list: Array<{
    id: number,
    content: string,
    created_at: string,
    tags: [],
    title: string,
    url: string,
  }>,
  count: number,
}

interface IProps {
  list: Array<{
    id: number,
    content: string,
    created_at: string,
    tags: [],
    title: string,
    url: string,
  }>,
  count: number,
  handlePage: any,
}

let pageNumber: number = 1;

const limit = 5;

export default class ComponentPosts extends React.Component<IProps, IState> {

  constructor(props: any) {
    super(props);
    this.state = {
      count: 0,
      list: [],
    }
  }

  // 前一页 / 后一页
  public handleNextProv = (direction: boolean) => {
    let page = pageNumber;
    // 判断下一页还是上一页
    // 上一页 false
    // 下一页 true
    if (direction) {
      this.handleSetPage(++page);
    } else {
      this.handleSetPage(--page);
    }
  }


  public handleSetPage = (page: number) => {
    this.props.handlePage({ page, limit });
    pageNumber = page;
  }

  public componentDidMount() {
    this.props.handlePage({ page: pageNumber, limit });
  }

  public render() {
    const { list, count } = this.props.list ? this.props : this.state;
    const countSize = Math.ceil(count / limit);
    const pageNumberArray = Array(countSize).fill('').map((item, index) => index + 1);
    const isReady = list.length > 0;
    return isReady && (
      <div className={styles.posts}>
        <ul>
          {
            list.map((value, key) => (
              <li key={key}>
                <NavLink to={`/posts/${value.id}`} title={value.title}>{value.title}</NavLink>
                <div className={styles.bar}>
                  <dl>
                    <dt>
                      <i className='iconfont icon-riqi date' />
                    </dt>
                    <dd>{value.created_at}</dd>
                  </dl>
                  {
                    value.tags && (
                      <dl>
                        <dt>
                          <i className="iconfont icon-iconset0170 tags" />
                        </dt>
                        <dd>
                          {
                            value.tags ? value.tags.map((v, k) => <NavLink key={k} to={{ pathname: "/tags", state: { tag: v } }}>{v}</NavLink>) : value.tags
                          }
                        </dd>
                      </dl>
                    )
                  }
                </div>
                <div className={styles.synopsis}>
                  <p dangerouslySetInnerHTML={{ __html: value.content }} />
                </div>
              </li>
            ))
          }
        </ul>
        <ol>
          {/* 判断边界 上 */}
          {
            pageNumber === 1
              ?
              <li className='page_btn_default limit iconfont icon-jiantou' />
              :
              <li className='page_btn_default iconfont icon-jiantou' onClick={this.handleNextProv.bind(this, false)} />
          }
          {/* 循环页码 */}
          {
            pageNumberArray.map((page, key) => (
              <li key={key} className={pageNumber === page ? 'active circle' : 'circle'} onClick={this.handleSetPage.bind(this, page)} />
            ))
          }
          {/* 判断边界 下 */}
          {
            pageNumber === countSize
              ?
              <li className='page_btn_default limit iconfont icon-jiantou3' />
              :
              <li className='page_btn_default iconfont icon-jiantou3' onClick={this.handleNextProv.bind(this, true)} />
          }
        </ol>
      </div>
    )
  }
}