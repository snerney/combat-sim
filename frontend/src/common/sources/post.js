import axios from 'axios';
// import * as Cookies from "js-cookie";
axios.defaults.xsrfHeaderName = "X-CSRFToken";


const argsToForm = (args) => {
  let data = new FormData()
  Object.keys(args).forEach((key) => {
    if (args.hasOwnProperty(key) && args[key] !== null && args[key] !== undefined) {
      data.append(key, args[key])
    }
  })
  return data
}

const http = (url, method, args, returnData=true) => {
  let data = args ? argsToForm(args) : undefined;
  // TODO: Deal with the CSRF token?
  let prefix = window.location.hostname == 'localhost' ? 'http://localhost:8000' : 'https://api.dndfightsimulator.com'
  console.log(prefix)
  return axios({
    method: method,
    url: prefix + url,
    data: data,
    withCredentials: false,
    headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}
  })
}

export {http as default}