import axios from "axios";

export default {
  // Gets all books
  checkSite: function(site) {
    return axios.get("/api/check/"+site);
  },

};
