const { Sequelize } = require('sequelize');

export class Sequalize {
  constructor() {}

  sequalize() {
    return new Sequelize({
      dialect: 'sqlite',
      storage: 'db/db.db',
      options: {
        query: {
          raw: true,
        },
      },
    });
  }
}
