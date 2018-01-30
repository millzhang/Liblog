'use strict';
/**
 * db config
 * @type {Object}
 */

exports.__esModule = true;
exports.default = {
  type: 'mysql',
  log_sql: true,
  log_connect: true,
  adapter: {
    mysql: {
      host: '116.85.44.204',
      port: '3306',
      database: 'liblog',
      user: 'root',
      password: '123456',
      prefix: 'li_',
      encoding: 'utf8'
    },
    mongo: {}
  }
};
//# sourceMappingURL=db.js.map