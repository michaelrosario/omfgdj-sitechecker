import axios from "axios";

export default {
  // Gets all books
  checkSite: function(site) {
    return axios.get("/api/site/check/"+site);
  },
  saveSite: function(data) {
    return axios.post("/api/site", data);
  },
  login: function(data) {
    return axios.post('/user/login',data);
  },
  signup: function(data) {
    return axios.post('/user/signup',data);
  },
  checkLoggedIn: function() {
    return axios.get('/user/');
  },
  logout: function() {
    return axios.post('/user/logout');
  }
  // ,
  // checkWappalyzer: function(site) {
  //   return axios.get("/api/site/wapp/"+site);
  // }
  
};
