import axios from "axios";

export default {
  // Gets all books
  checkSite: function(site) {
    return axios.get("/api/site/check/"+site);
  },
  saveSite: function(data) {
    return axios.post("/api/site", data);
  },
  updateSite: function(data,id) {
    return axios.put(`/api/site/${id}`, data);
  },
  login: function(data) {
    return axios.post('/user/login',data);
  },
  signup: function(data) {
    return axios.post('/user/signup',data);
  },
  getUserById: function(id) {
    return axios.get('/api/user/'+id);
  },
  getUserByLogin: function(username) {
    return axios.get('/api/user/name/'+username);
  },
  checkLoggedIn: function() {
    return axios.get('/user/');
  },
  logout: function() {
    return axios.post('/user/logout');
  },
  getsites: function() {
    return axios.get('/api/site');
  },
  getIconByTitle: function(title) {
    return axios.get(`/api/badge/title?title=${title}`);
  },
  getSiteByUrl: function(url) {
    return axios.get(`/api/site/url?url=${url}`);
  },
  getAllBadges: function(){
    return axios.get('/api/badge');
  },
  addSiteToUser: function(userId,siteId){
    return axios.put('/api/user/add-site',{ userId, siteId });
  },
  
};
