// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import basic from '../reducers/basic';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    basic
  });
}
