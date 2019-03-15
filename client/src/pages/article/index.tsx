import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { getArticleById } from '../../request/api';
import * as styles from './index.scss';

export default class Article extends React.Component<{ match: any }, { article: any }> {
  constructor(props: any) {
    super(props)
    this.state = {
      article: {},
    }
  }

  public async componentDidMount() {
    const id = this.props.match.params.id;
    const { data } = await (await getArticleById(id)).json();
    this.setState({
      article: data,
    })
  }

  public render() {
    const { article } = this.state;
    // 判断数据是否装载
    const isReady = (Object.keys(article)).length !== 0;

    return isReady && (
      <article className={styles.article}>
        <div className={styles.article_info}>
          <h1>{article.title}</h1>
          <div>
            <dl>
              <dt>标签:</dt>
              {
                article.tags.map((v: string, k: number) => (
                  <dd key={k}><NavLink to={{ pathname: "/tags", state: { tag: v } }}>{v}</NavLink></dd>
                ))
              }
            </dl>
            <dl>
              <dt>时间:</dt>
              <dd>{article.created_at}</dd>
            </dl>
          </div>
        </div>
        <main className={`article_main markdown-body`} dangerouslySetInnerHTML={{ __html: article.content }} />

      </article>
    )
  }
}