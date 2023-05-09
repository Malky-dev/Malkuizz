const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
  return sequelize.define('User', {
    userID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nickname: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    roleID: {
      type: DataTypes.INTEGER
    },
    isVerified: {
      type: DataTypes.INTEGER
    }
  }, {
    freezeTableName: true,
    timestamps: true
  })
}