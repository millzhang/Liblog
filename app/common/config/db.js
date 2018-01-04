'use strict';
/**
               * db config
               * @type {Object}
               */exports.__esModule = true;exports.default =
{
  type: 'mysql',
  log_sql: true,
  log_connect: true,
  adapter: {
    mysql: {
      host: '127.0.0.1',
      port: '3306',
      database: 'liblog',
      user: 'root',
      password: 'shamrock5488',
      prefix: 'li_',
      encoding: 'utf8' },

    mongo: {} } };