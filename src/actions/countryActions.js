import COUNTRY from "./countryActionTypes";
import FakeService from "./../mockApi/FakeService";


////////////////////
// global actions //
////////////////////
export const startRequest = () => {
  return {
    type: COUNTRY.START_REQUEST,
    loading: true
  };
};

export const handleError = (err) => {
  return {
    type: COUNTRY.HANDLE_ERROR,
    loading: false,
    err
  };
};




/////////
// get //
/////////
export const getHandleSuccess = (countries) => {
  return {
    type: COUNTRY.GET_HANDLE_SUCCESS,
    loading: false,
    countries
  };
};


export const getCountries = () => {
  return (dispatch) => {
    dispatch(startRequest());
    return FakeService.GetCountryService()
      .then((response) => dispatch(getHandleSuccess(response.data)));
  };
};




//////////
// save //
//////////
export const saveHandleSuccess = (country) => {
  return {
    type: COUNTRY.GET_HANDLE_SUCCESS,
    loading: false,
    country
  };
};


export const saveCountry = () => {
  return (dispatch) => {
    dispatch(startRequest());
    return FakeService.SaveCountryService()
      .then((response) => dispatch(saveHandleSuccess(response.data)));
  };
};





////////////
// delete //
////////////
export const deleteHandleSuccess = (countryId) => {
  console.log('countryId ', countryId);
  return {
    type: COUNTRY.DELETE_HANDLE_SUCCESS,
    loading: false,
    countryId
  };
};

export const deleteCountry = (countryId) => {
  console.log('countryId ', countryId);
  return (dispatch) => {
    dispatch(startRequest());
    return FakeService.DeleteCountryService(countryId)
      .then(() => dispatch(deleteHandleSuccess(countryId)))
      .catch((err) => dispatch(handleError(err)));
  };
};




