import ENDPOINT from "./endpointActionTypes";
import FakeService from "./../mockApi/FakeService";


////////////////////
// global actions //
////////////////////
export const startRequest = () => {
  return {
    type: ENDPOINT.START_REQUEST,
    loading: true
  };
};

export const handleError = (err) => {
  return {
    type: ENDPOINT.HANDLE_ERROR,
    loading: false,
    err
  };
};




/////////
// get //
/////////
export const getHandleSuccess = (endpoints) => {
  return {
    type: ENDPOINT.GET_HANDLE_SUCCESS,
    loading: false,
    endpoints
  };
};


export const getEndpoints = (lang) => {
  return (dispatch) => {
    dispatch(startRequest());
    return FakeService.GetEndpointService(lang)
      .then((response) => dispatch(getHandleSuccess(response.data)));
  };
};




//////////
// save //
//////////
export const saveHandleSuccess = (endpoint) => {
  return {
    type: ENDPOINT.GET_HANDLE_SUCCESS,
    loading: false,
    endpoint
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
export const deleteHandleSuccess = (endpointId) => {
  console.log('endpointId ', endpointId);
  return {
    type: ENDPOINT.DELETE_HANDLE_SUCCESS,
    loading: false,
    endpointId
  };
};

export const deleteCountry = (endpointId) => {
  console.log('endpointId ', endpointId);
  return (dispatch) => {
    dispatch(startRequest());
    return FakeService.DeleteCountryService(endpointId)
      .then(() => dispatch(deleteHandleSuccess(endpointId)))
      .catch((err) => dispatch(handleError(err)));
  };
};




