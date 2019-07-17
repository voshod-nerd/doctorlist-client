const Sequelize = require('sequelize');

const sequelize = new Sequelize("Vrachi", "sa",
  "19800123", {
    host: "192.168.0.10",
    port: "1433", // <----------------The port number you copied
    dialect: "mssql",
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });


const CertificationrModel = require('./model/certification');
const DoctorsModel = require('./model/doctors');

const Certification = CertificationrModel(sequelize, Sequelize);
const Doctor = DoctorsModel(sequelize, Sequelize);


// 1:M
Doctor.hasMany(Certification, {
  foreignKey: 'iddokt'
});
Certification.belongsTo(Doctor, {
  foreignKey: 'iddokt'
});


sequelize.sync()
  .then(() => {
    console.log('Database & tables created!')
  })

module.exports = {
  Doctor,
  Certification,
  sequelize
}
