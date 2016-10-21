import COUNTRY from "../actions/countryActionTypes";
import _ from "lodash";


const initialState = {
  loading: false,
  list: []
};

const countryReducer = (state = initialState, action) => {

  switch (action.type) {

    ////////////
    // global //
    ////////////
    case COUNTRY.START_REQUEST:
      return _.extend({}, state, {
        loading: action.loading
      });

    case COUNTRY.HANDLE_ERROR:
      return _.extend({}, state, {
        loading: action.loading
      });






    ///////////////////
    // get countries //
    ///////////////////
    case COUNTRY.GET_HANDLE_SUCCESS:
      return _.extend({}, state, {
        loading: action.loading,
        list: action.countries
      });


    //////////////////
    // save country //
    //////////////////
    case COUNTRY.SAVE_HANDLE_SUCCESS:
      return _.extend({}, state, {
        loading: action.loading,
        item: action.countries
      });


    ////////////////////
    // delete country //
    ////////////////////
    case COUNTRY.DELETE_HANDLE_SUCCESS:
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


export default countryReducer;
