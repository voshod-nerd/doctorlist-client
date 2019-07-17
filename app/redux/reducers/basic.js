import {  GET_ALL_RECORD_DOCTORS,GET_ALL_RECORD_CERTIFICATION, CHOOSE_RECORD_DOCTOR} from "../contstants/index";

const initialState = {
  choosed_record_doctor: {
    iddokt: "",
    lpukod: "",
    id_otd: "",
    fam: "",
    im: "",
    ot: "",
    dokt: "",
    prvs: "",
    date_vn: "",
    date_uv: "",
  },
  listDoctors: [],
  listCertifications:[]
};

export default function rootReducer(state=initialState, action) {
 
  switch (action.type) {
    case GET_ALL_RECORD_DOCTORS: {
      console.log('doctor=',action.payload);
      return Object.assign({}, state, {
        ...state,
        listDoctors: action.payload
        
      });
    }
    case GET_ALL_RECORD_CERTIFICATION: {
      console.log('certification=',action.payload);
      return Object.assign({}, state, {
        ...state,
        listCertifications: action.payload
        
      });
    }
    case CHOOSE_RECORD_DOCTOR: {
      return Object.assign({}, state, {
        ...state,
        choosed_record_doctor: action.payload        
      });
    }

   
    default:
      return state;
  }
}
