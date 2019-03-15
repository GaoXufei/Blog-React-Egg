// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportGzip from '../../../app/middleware/gzip';

declare module 'egg' {
  interface IMiddleware {
    gzip: typeof ExportGzip;
  }
}
