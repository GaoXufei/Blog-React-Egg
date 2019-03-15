// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportPosts from '../../../app/model/posts';
import ExportUser from '../../../app/model/user';

declare module 'sequelize' {
  interface Sequelize {
    Posts: ReturnType<typeof ExportPosts>;
    User: ReturnType<typeof ExportUser>;
  }
}
