const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
  return sequelize.define('Role', {
    roleID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    roleLabel: {
      type: DataTypes.STRING
    }
  }, {
    freezeTableName: true,
    timestamps: false
  })
}