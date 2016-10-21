import axios from "axios";

import replaceUrlParams from "./../../utils/replaceUrlParams";


const JsonService = (
  method = "get",
  url,
  dataOrParams = {},
  urlParams = {},
  headers = {}
) => {

  let isGet = (/(get|post|put|delete|patch|options)/gi).test(method);
  let isUrlHasParams = (/(\{[a-zA-Z0-9_-]+\})/gi).test(url) && !_.isEmpty(urlParams);

  let requestInstance = {
    method: isGet ? "get" : method,
    baseUrl: isUrlHasParams ? replaceUrlParams(url, urlParams) : url,
    params: isGet ? dataOrParams : {},
    data: isGet ? {} : dataOrParams,
    headers
  };

  return axios(requestInstance);

};


export default JsonService;
