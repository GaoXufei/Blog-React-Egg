import * as React from 'react';
import * as styles from './recent.scss';

import { NavLink } from 'react-router-dom';

interface IProps {
  list: Array<{
    title: string,
    id: number,
  }>
}

// 最近文章
export default class Recent extends React.Component<IProps, {}> {

  public render() {
    const { list } = this.props;
    const isReady = list.length > 0;
    return isReady && (
      <div className={styles.recent}>
        <h2>最近文章</h2>
        <ul>
          {
            list.map((post, key) => (
              <li key={key}>
                <NavLink to={`/posts/${post.id}`}>{post.title}</NavLink>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}