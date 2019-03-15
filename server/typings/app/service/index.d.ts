// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportIndex from '../../../app/service/index';
import ExportTopics from '../../../app/service/topics';

declare module 'egg' {
  interface IService {
    index: ExportIndex;
    topics: ExportTopics;
  }
}
