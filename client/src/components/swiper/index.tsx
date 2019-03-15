import * as React from 'react';
import * as styles from './index.scss';

interface IState {
  imgs: Array<{
    src: string,
    active?: boolean
  }>,
  current: number,
}

export default class Swiper extends React.Component<{}, IState, {}> {

  private timer: any;

  constructor(props: any) {
    super(props);
    // 假数据
    this.state = {
      current: 0,
      imgs: [
        { src: require('../../assets/images/index_banner01.jpg') },
        { src: require('../../assets/images/index_banner02.jpg') },
        { src: require('../../assets/images/index_banner03.jpg') },
      ],
    }
  }

  public componentDidMount() {
    this.setOneImg();
    this.autoPlayImg();
  }

  public componentWillUnmount() {
    clearInterval(this.timer)
  }

  // 自动运行轮播
  public autoPlayImg = () => {
    // 设置定时器
    this.timer = setInterval(() => {
      // 获取当前显示的下标
      let count = this.state.current;
      // 下标自增
      count++;
      // 限制边界
      if (count >= this.state.imgs.length) {
        count = 0;
      }
      // 将显示下标带入切换方法
      this.handleTab(count)
    }, 4000)

  }

  // 设置首个出现的图片
  public setOneImg = () => {
    // 拿到图片数组
    const img = this.state.imgs;
    // 将第一个状态更改为true
    img[0].active = true;
    // 赋值给state
    this.setState({
      imgs: img
    })
  }
  // 切换图片
  public handleTab = (count: any) => {
    // 循环出有active属性的对象，删除
    const Imgs = this.state.imgs.map(value => {
      if (value.active) { delete value.active };
      return value
    })
    // 将当前下标的对象更改状态
    Imgs[count].active = true;
    // 返还给state
    this.setState({ imgs: Imgs, current: count });
  }

  public render() {
    // 获取图片数据
    // 这里使用的是假数据，等链接到数据库之后请求真实数据
    const { imgs } = this.state;
    // 给第一条数据添加一个active属性，使默认显示为第一张图片
    // imgs[0].active = true;
    return (
      <div className={styles.swiper}>
        {/* 图片 */}
        <ul className={styles.swiper_images}>
          {
            imgs.map((value, key) => (
              <li key={key} className={value.active ? `active` : ``} >
                <img src={value.src} alt="" />
              </li>
            ))
          }
        </ul>
        {/* slides */}
        <ul className={styles.swiper_slider} >
          {
            imgs.map((value, key) => (
              <li key={key} className={value.active ? `active` : ``} onClick={() => this.handleTab(key)} />
            ))
          }
        </ul>
      </div>
    )
  }


}