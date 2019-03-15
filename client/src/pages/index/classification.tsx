import * as React from 'react';
import * as styles from './classification.scss';

// react-router-dom link组件
import { NavLink } from 'react-router-dom';

// loader
import Loader from '../../components/loaderAnimate/circlesToRhombusesSpinner'

interface IProps {
  tags: []
}

export default class Classification extends React.Component<IProps> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    const tags = this.props.tags;
    const isReady = tags.length > 0;
    return (
      <div className={styles.classification}>
        <h2>标签分类</h2>
        <ul>
          {
            isReady
              ?
              tags.map((value, key) => (
                <li key={key}>
                  <NavLink to={{ pathname: "/tags", state: { tag: value } }} style={{ background: this.freeColor() }}>{value}</NavLink>
                </li>
              ))
              :
              <Loader />
          }
        </ul>
      </div>
    )
  }
  // 随机颜色
  private freeColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgba(${r}, ${g}, ${b}, .6)`;
  }
}