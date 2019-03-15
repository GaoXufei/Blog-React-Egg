import { Application } from 'egg';
import * as moment from 'moment';

export default (app: Application) => {
  const { STRING, INTEGER, DATE, TEXT, NOW } = app.Sequelize;
  const postsModel = app.model.define('posts', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    title: STRING(255),
    created_at: {
      type: DATE,
      defaultValue: NOW,
      get(this: any) {
        return moment(this.getDataValue('created_at')).format('YYYY-MM-DD HH:mm:ss');
      },
    },
    updated_at: {
      type: DATE,
      defaultValue: NOW,
      get(this: any) {
        return moment(this.getDataValue('created_at')).format('YYYY-MM-DD HH:mm:ss');
      },
    },
    tags: STRING,
    content: TEXT,
    tab: STRING,
  });
  return postsModel;
};
