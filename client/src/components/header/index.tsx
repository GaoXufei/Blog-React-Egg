import * as React from 'react';
import HeaderCanvas from '../headerCanvas'
import * as styles from './index.scss';

// 组件
import Nav from './nav';

export default class Header extends React.Component {
  public render() {
    return (
      <header className={styles.header}>
        <HeaderCanvas />
        <div className={styles.nav_wrap}>
          <Nav />
        </div>
      </header>
    )
  }
}