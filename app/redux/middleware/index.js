import { GET_ALL_RECORD_CERTIFICATION } from "../contstants/index";
const forbiddenWords = ["spam", "money"];


export function AnyMiddleware({ dispatch }) {
    return function(next) {
      return function(action) {
        // do your stuff
        if (action.type === GET_ALL_RECORD_CERTIFICATION) {
          
          //const foundWord = forbiddenWords.filter(word =>
          //  action.payload.title.includes(word)
          //);
          //if (foundWord.length) {
          //  return dispatch({ type: "FOUND_BAD_WORD" });
          //}
        }
        return next(action);
      };
    };
  }