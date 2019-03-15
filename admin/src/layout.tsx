import { Layout } from 'antd';
import * as React from 'react';
import { Redirect, Route, Switch, } from 'react-router-dom';
import './layout.css'

// components
import Content from './components/content';
import Sider from './components/sider';

// pages
import CreatePost from './pages/create';
import ShowPosts from './pages/posts';

export default class LayoutContainer extends React.Component<{}, { collapsed: boolean }> {

  constructor(props: any) {
    super(props);
    this.state = {
      collapsed: false
    }
  }

  public componentDidMount() {
    // tslint:disable-next-line:no-console
    // console.log(this.props);
  }

  public render() {
    return (
      <Layout className="container">
        <Sider />
        {/* 主要显示内容 */}
        <Layout>
          <Content>
            {/* 路由容器 */}
            <Switch>
              <Route path="/" exact={true} render={() => <Redirect to="/posts" />} />
              <Route path="/create" component={CreatePost} />
              <Route path="/posts" component={ShowPosts} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    )
  }
}