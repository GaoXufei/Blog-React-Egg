import { Icon, Layout, Menu, } from 'antd';
import * as React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;  // 多选列表
const ItemMenu = Menu.Item; // 单选

const FunctionSider = withRouter((props: any): any => {
  const { collapsed, onCollapse, location } = props;
  const path = location.pathname.split('/').filter((i: any) => i);
  return (
    <Sider collapsible={true} collapsed={collapsed} onCollapse={onCollapse}>
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={path} mode="inline">
        {/* 单选 */}
        <ItemMenu key="posts">
          <NavLink to={{ pathname: '/posts' }}>
            <Icon type="database" />
            <span>文章列表</span>
          </NavLink>
        </ItemMenu>
        <ItemMenu key="create">
          <NavLink to={{ pathname: '/create' }}>
            <Icon type="form" />
            <span>创建文章</span>
          </NavLink>
        </ItemMenu>
        {/* 多选 */}
        <SubMenu
          key="sub1"
          title={<span><Icon type="user" /><span>用户列表</span></span>}
        >
          <ItemMenu key="3">TOM</ItemMenu>
          <ItemMenu key="4">JIM</ItemMenu>
          <ItemMenu key="5">ALEX</ItemMenu>
        </SubMenu>
      </Menu>
    </Sider>
  )
})

class ComponentSider extends React.Component<{}, { collapsed: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = {
      collapsed: true
    }
  }


  public handleCollapse = (collapsed: boolean) => {
    this.setState({ collapsed })
  }

  public render() {
    const { collapsed } = this.state;
    return (
      <FunctionSider collapsed={collapsed} onCollapse={this.handleCollapse} />
    )
  }
}

export default ComponentSider;