const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
  return sequelize.define('Question', {
    difficultyID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    difficultyLabel: {
      type: DataTypes.STRING
    }
  }, {
    freezeTableName: true,
    timestamps: true
  })
}