import * as React from 'react';
import * as styles from './fast.scss';

import { NavLink } from 'react-router-dom';

export default class Fast extends React.Component {
  public render() {
    return (
      <div className={styles.fast}>
        <h2>友情链接</h2>
        <ul>
          <li>
            <NavLink to="/">百度一下</NavLink>
          </li>
          <li>
            <NavLink to="/">Github</NavLink>
          </li>
          <li>
            <NavLink to="/">Bing</NavLink>
          </li>
        </ul>
      </div>
    )
  }
}