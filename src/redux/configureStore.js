import { combineReducers, legacy_createStore as createStore } from "redux";
import counterVoterReducer from "./ducks/counterVoter";
import counterZikrReducer from "./ducks/counterZikr";

const reducer = combineReducers({
  counterVoter: counterVoterReducer,
  counterZikr: counterZikrReducer,
});

const store = createStore(reducer);

export default store;
