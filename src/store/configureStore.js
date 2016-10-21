import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

import rootReducer from "../reducers";






const configureStore = (initialState) => {
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(
        reduxThunk,
        reduxImmutableStateInvariant()
      ),
      window.devToolsExtension()
    )

  );
};


export default configureStore;
