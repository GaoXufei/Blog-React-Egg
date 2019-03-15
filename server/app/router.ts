import { Application } from 'egg';
import api from './routers/router.api';

export default (app: Application) => {
  api(app);
};
