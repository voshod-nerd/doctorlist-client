const Sequelize = require('sequelize');

module.exports = (sequelize, type) => {
  return sequelize.define('sertif', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    n_sert: Sequelize.STRING,
    reg_num:Sequelize.STRING,
    prvs: Sequelize.INTEGER,
    prvs_s: Sequelize.STRING,
    iddokt: Sequelize.INTEGER,
    dateadd:Sequelize.DATE,
    date_begin:Sequelize.DATE,
    date_end:Sequelize.DATE,
  }, {
    sequelize,
    freezeTableName: true,
    timestamps: false,
    modelName: "sertif"
  })
};
