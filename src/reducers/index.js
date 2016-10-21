import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { formReducer } from "redux-form";

import countryReducer from "./countryReducer";
import endpointReducer from "./endpointReducer";

const rootReducer = combineReducers({
  countries: countryReducer,
  endpoints: endpointReducer,
  routing: routerReducer,
  form: formReducer
});


export default rootReducer;

