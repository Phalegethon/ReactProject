import ENDPOINT from "../actions/endpointActionTypes";
import _ from "lodash";


const initialState = {
  loading: false,
  list: []
};

const endpointReducer = (state = initialState, action) => {

  switch (action.type) {

    ////////////
    // global //
    ////////////
    case ENDPOINT.START_REQUEST:
      return _.extend({}, state, {
        loading: action.loading
      });

    case ENDPOINT.HANDLE_ERROR:
      return _.extend({}, state, {
        loading: action.loading
      });






    ///////////////////
    // get endpoints //
    ///////////////////
    case ENDPOINT.GET_HANDLE_SUCCESS:
      return _.extend({}, state, {
        loading: action.loading,
        list: action.endpoints
      });


    //////////////////
    // save endpoint //
    //////////////////
    case ENDPOINT.SAVE_HANDLE_SUCCESS:
      return _.extend({}, state, {
        loading: action.loading,
        item: action.endpoints
      });


    ////////////////////
    // delete endpoint //
    ////////////////////
    case ENDPOINT.DELETE_HANDLE_SUCCESS:
      console.log('state ', state);
      return _.extend({}, state, {
        loading: action.loading,
        list: _.reject(state.list, {
          _id: action.countryId
        })
      });


    default:
      return state;

  }

};


export default endpointReducer;
