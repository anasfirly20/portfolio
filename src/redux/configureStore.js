import { combineReducers, legacy_createStore as createStore } from "redux";

// reducers
import counterVoterReducer from "./ducks/counterVoter";
import counterZikrReducer from "./ducks/counterZikr";

const reducer = combineReducers({
  counterVoter: counterVoterReducer,
  counterZikr: counterZikrReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
