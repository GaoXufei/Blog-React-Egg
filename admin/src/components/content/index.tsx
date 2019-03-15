import { Breadcrumb, Layout } from 'antd';
import * as React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

const { Content } = Layout;

const breadcrumbNameMap = {
  "/create": "创建文章",
  "/create/test": "测试一下创建",
  "/posts": "文章列表",
}

const BreadcrumbComponent = withRouter((props: any): any => {
  // 获取location
  const { location } = props;
  // 
  const pathSnippets = location.pathname.split('/').filter((i: any) => i);
  const extraBreadcrumbItems = pathSnippets.map((_: any, index: any) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;

    return (
      <Breadcrumb.Item key={url}>
        <NavLink to={url}>{breadcrumbNameMap[url]}</NavLink>
      </Breadcrumb.Item>
    )
  });

  const breadcrumbItems = [...extraBreadcrumbItems];

  return (
    <Breadcrumb style={{ padding: '10px 0' }}>
      {breadcrumbItems}
    </Breadcrumb>
  )
})

export default class ComponentContent extends React.Component<{ children: any }, {}> {
  public render() {
    return (
      <Content style={{ margin: '0 15px' }}>
        <BreadcrumbComponent />
        <div style={{ padding: 24, background: '#fff' }}>
          {this.props.children}
        </div>
      </Content>
    )
  }
}