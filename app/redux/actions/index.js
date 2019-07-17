// @flow

import {GET_ALL_RECORD_CERTIFICATION,GET_ALL_RECORD_DOCTORS,CHOOSE_RECORD_DOCTOR} from "../contstants/index";


export function getAllDoctorsFromDB(payload) {
  return {
    type: GET_ALL_RECORD_DOCTORS,
    payload
  };
}

export function getAllCertification(payload) {
  return {
    type: GET_ALL_RECORD_CERTIFICATION,
    payload
  };
}

export function chooseRecordDoctor(payload) {
  return {
    type: CHOOSE_RECORD_DOCTOR,
    payload
  };
}





