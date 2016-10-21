import _ from "lodash";

const replaceUrlParams = (url, paramsObject) => {

  _.forOwn(paramsObject, (val, key) => {
    let reg = new RegExp("{" + key + "}", "g");
    url = url.replace(reg, val);
  });

  return url;

};


export default replaceUrlParams;
