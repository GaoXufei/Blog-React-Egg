// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportTopics from '../../../app/controller/topics';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    topics: ExportTopics;
  }
}
