const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
  return sequelize.define('Category', {
    categoryID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    categoryLabel: {
      type: DataTypes.STRING
    }
  }, {
    freezeTableName: true,
    timestamps: true
  })
}