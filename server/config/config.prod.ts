import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};
  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'sql_egg',
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: 'root',
    timezone: '+08:00',
  };
  return config;
};
