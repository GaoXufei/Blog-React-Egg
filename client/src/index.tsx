import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// 路由文件
import Routers from './routers'; // 引用路由控制文件

// Redux
import { Provider } from 'react-redux';
import store from './redux/store'

import './assets/iconfont/iconfont.css'; // iconfont css
import './assets/style/default.scss'; // 全局scss变量定义
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Routers />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
