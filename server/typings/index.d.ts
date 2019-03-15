import 'egg';
// import 'Sequelize';

declare module 'egg' {
  interface Application {
    Sequelize: SequelizeStatic
    model: Sequelize
  }
  interface Context {
    model: {
      User: Model<{}, {}>;
    }
  }
}