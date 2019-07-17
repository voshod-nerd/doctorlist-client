import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/basic";

import { AnyMiddleware } from "./middleware/index";

// eslint-disable-next-line no-underscore-dangle
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    rootReducer,
    storeEnhancers(applyMiddleware(AnyMiddleware))
  );
export default store;