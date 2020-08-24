const { DataTypes } = require('sequelize');

export class Models {
  constructor(private sequelize) {}

  user() {
    return this.sequelize.define(
      'USER',
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        USERNAME: {
          type: DataTypes.STRING,
        },
        PASSWORD: {
          type: DataTypes.STRING,
        },
      },
      {
        freezeTableName: true,
        timestamps: false,
      }
    );
  }

  project() {
    return this.sequelize.define(
      'PROJECT',
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        TITLE: {
          type: DataTypes.STRING,
        },
        USER_ID: {
          type: DataTypes.INTEGER,
          references: 'USER',
          referencesKey: 'id',
        },
      },
      {
        freezeTableName: true,
        timestamps: false,
      }
    );
  }
}
