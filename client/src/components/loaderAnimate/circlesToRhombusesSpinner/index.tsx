import * as React from 'react';
import * as styles from './index.scss';

export default () => {
  return (
    <div className={styles.CircleToRhombusesSpinner}>
      <div className="circle" />
      <div className="circle" />
      <div className="circle" />
    </div>
  )
}