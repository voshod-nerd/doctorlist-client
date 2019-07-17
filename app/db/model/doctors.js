const Sequelize = require('sequelize');

module.exports = (sequelize, type) => {
  return sequelize.define('spisok_vrach', {
    iddokt: {
      type: Sequelize.INTEGER,
      primaryKey: true,   
    },
    lpukod: Sequelize.INTEGER,
    id_otd: Sequelize.INTEGER,
    fam: Sequelize.STRING,
    im: Sequelize.STRING,
    ot: Sequelize.STRING,
    dokt: Sequelize.SMALLINT,
    prvs: Sequelize.INTEGER,
    date_vn: Sequelize.DATE,
    date_uv: Sequelize.DATE
  }, {
    sequelize,
    freezeTableName: true,
    timestamps: false,
    modelName: 'spisok_vrach'
  })
};
