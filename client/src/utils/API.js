import axios from "axios";

export default {
  // Gets all books
  checkSite: function(site) {
    return axios.get("/api/check/"+site);
  },

  checkWappalyzer: function(site) {
    return axios.get("/api/wapp/"+site);
  }
};
