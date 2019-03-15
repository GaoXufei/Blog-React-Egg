import * as React from 'react';
import { Route, Switch, } from 'react-router-dom';
import * as styles from './App.scss';

// components
import Footer from './components/footer'
import Header from './components/header';
// pages
import Article from './pages/article';
import Index from './pages/index';
import Posts from './pages/posts';
import Tags from './pages/tags';
// 路由分支
const Main = () => {
  return (
    <article className={styles.article}>
      <Switch>
        <Route path="/" component={Index} exact={true} />
        <Route path="/posts" component={Posts} exact={true} />
        <Route path="/posts/:id" component={Article} />
        <Route path="/tags" component={Tags} />
      </Switch>
    </article>
  )
}

export default class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
        <Footer />
      </React.Fragment>
    )
  }
}

