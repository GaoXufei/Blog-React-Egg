import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';

export default class Nav extends React.Component<{}, { isShow: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = {
      isShow: true
    }
  }

  public handleIsShow = () => {
    const Switch = !this.state.isShow;
    this.setState({ isShow: Switch })
  }

  public render() {
    const { isShow } = this.state;
    return (
      <nav className={`nav ${isShow ? 'nav_active' : ''}`}>
        <div className='nav_switch' onClick={this.handleIsShow}>
          <span />
          <span />
          <span />
        </div>
        <ul className='nav_list_wrap'>
          <li>
            <NavLink exact={true} to="/">首页</NavLink>
          </li>
          <li>
            <NavLink exact={true} to="/posts">文章</NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}