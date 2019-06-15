const router = require("express").Router();
const axios = require("axios");
const cheerio = require("cheerio");

// Book routes
//router.use("/books", bookRoutes);

router.get("/check/:site", function(req,res){
      let site = req.params.site;
      // remove http amd https and use www   
      console.log(site);
      axios.get("https://"+site)
        .then(response => {
          //console.log(response.data);
          const $  = cheerio.load(response.data);

          const output = [];

          $("meta").each((i, element) => {
              output.push({
                name: $(element).attr("name"),
                content: $(element).attr("content")
              });
          });

          console.log("output",output);
          return res.json(output);
        }).catch( error => console.log(error));

  })
  

module.exports = router;
