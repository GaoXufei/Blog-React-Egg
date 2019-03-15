import * as React from 'react';
import * as styles from './me.scss'

export default class IndexMe extends React.Component {
  public render() {
    return (
      <div className={styles.me}>
        <div className={styles.me_avatar}>
          <img src="" alt="" />
        </div>
        <div className={styles.me_info}>
          <p>Leo Gao</p>
          <p className="font_weight">web前端工程师</p>
          <p>www.github/test.com</p>
        </div>
      </div>
    )
  }
}