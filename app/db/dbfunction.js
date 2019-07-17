const { sequelize,Certification,Doctor } = require('./orminit');


export function gellAllDoctor() {
   return Doctor.findAll();
}

export function gellAllCertifications() {
   return Certification.findAll();
}