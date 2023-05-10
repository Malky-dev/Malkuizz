const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
  return sequelize.define('Session', {
    userID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    token: {
      type: DataTypes.STRING
    },
    expiration: {
      type: DataTypes.DATE
    },
    device: {
      type: DataTypes.STRING
    },
    browser: {
      type: DataTypes.STRING
    }
  }, {
    freezeTableName: true,
    timestamps: false
  })
}