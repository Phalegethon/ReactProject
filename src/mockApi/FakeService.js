const delay  = 1000;

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const countries = JSON.parse('{"data" :[{"_id":"57b304b3528321e8325cae65","modified":"2016-08-16T12:18:59.456Z","created":"2016-08-16T12:18:59.456Z","name":"United Kingdom","lang":"en-GB","code":"uk","__v":0,"modifiedBy":"Ömer Aslanbakan"},{"_id":"57b304da528321e8325cae66","modified":"2016-08-16T12:19:52.962Z","created":"2016-08-16T12:19:38.862Z","name":"Australia","lang":"en-AU","code":"au","__v":0,"modifiedBy":"Ömer Aslanbakan"},{"_id":"57b304ee528321e8325cae67","modified":"2016-08-16T12:19:58.950Z","created":"2016-08-16T12:19:58.950Z","name":"Spain","lang":"es-ES","code":"es","__v":0,"modifiedBy":"Ömer Aslanbakan"}]}');
const country = JSON.parse('{"data" :[{"_id":"57b304b3528321e8325cae65","modified":"2016-08-16T12:18:59.456Z","created":"2016-08-16T12:18:59.456Z","name":"United Kingdom","lang":"en-GB","code":"uk","__v":0,"modifiedBy":"Ömer Aslanbakan"}]}');



const endpoints = JSON.parse('{"data":[{"_id":"57b49144bd07f7c341f3206a","lang":"en-GB","desc":"Login","url":"api/kredit/customer/account/login","method":"post","created":"2016-08-19T13:47:01.792Z","modifiedBy":"Ömer Aslanbakan"},{"_id":"57b4865fbd07f7c341f32060","lang":"en-GB","desc":"Get Personal Details","url":"api/kredit/customer/account/personaldetails","method":"get","created":"2016-08-19T13:47:01.792Z","modifiedBy":"Ömer Aslanbakan"},{"_id":"57b489370e4f9bc9418aa0e1","lang":"en-GB","desc":"Post Personal Details","url":"api/kredit/customer/account/personaldetails","method":"post","created":"2016-08-19T13:47:01.792Z","modifiedBy":"Ömer Aslanbakan"},{"_id":"57b484a90e4f9bc9418aa0dd","lang":"en-GB","desc":"Home Page Register","url":"api/kredit/customer/account/register","method":"post","created":"2016-08-19T13:47:01.792Z","modifiedBy":"Ömer Aslanbakan"},{"_id":"57b48b2c0e4f9bc9418aa0f0","lang":"en-GB","desc":"Re-send PIN","url":"api/kredit/customer/account/resendpin","method":"post","created":"2016-08-19T13:47:01.792Z","modifiedBy":"Ömer Aslanbakan"},{"_id":"57b48b000e4f9bc9418aa0ec","lang":"en-GB","desc":"Update Mobile Phone","url":"api/kredit/customer/account/updatemobilephone","method":"put","created":"2016-08-19T13:47:01.792Z","modifiedBy":"Ömer Aslanbakan"}]}');
const endpoint = JSON.parse('{"data":[{"_id":"57b49144bd07f7c341f3206a","lang":"en-GB","desc":"Login","url":"api/kredit/customer/account/login","method":"post","created":"2016-08-19T13:47:01.792Z","modifiedBy":"Ömer Aslanbakan"}]}');



class FakeService {

  static GetCountryService() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], countries));
      }, delay);
    });
  }

  static SaveCountryService() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], country));
      }, delay);
    });
  }

  static DeleteCountryService(countryId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: `deleted ${countryId}`
        });
      }, delay);
    });
  }

  static GetEndpointService() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], endpoints));
      }, delay);
    });
  }

  static EditEndpointService() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], endpoint));
      }, delay);
    });
  }


}

export default FakeService;
