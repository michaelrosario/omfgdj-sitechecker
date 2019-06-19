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

          const data = {};

          // data
          const meta = [];
          const script = [];
          const images = [];
          const header1 = [];
          const header2 = [];
          const header3 = [];
          const header4 = [];
          const header5 = [];
          const links = [];

          // get all meta
          $("meta").each((i, element) => {
              meta.push({
                name: $(element).attr("name"),
                content: $(element).attr("content").trim()
              });
          });

          data.meta = meta;

          // get all scripts
          $("script").each((i, element) => {
            script.push({
              src: $(element).attr("src")
            });
          });

          data.script = script;

          // get all images
          $("img").each((i, element) => {
            images.push({
              src: $(element).attr("src"),
              alt: $(element).attr("alt")
            });
          });

          data.images = images;

          // get all header1
          $("h1").each((i, element) => {
            const headerText = $(element).text().trim();
            if(headerText != ""){
              header1.push({
                text: headerText
              });
            }
          });

          data.header1 = header1;
          
          // get all header2
          $("h2").each((i, element) => {
            const headerText = $(element).text().trim();
            if(headerText != ""){
              header2.push({
                text: headerText
              });
            }
          });

          data.header2 = header2;

          // get all header3
          $("h3").each((i, element) => {
            const headerText = $(element).text().trim();
            if(headerText != ""){
              header3.push({
                text: headerText
              });
            }
          });

          data.header3 = header3;

          // get all header4
          $("h4").each((i, element) => {
            const headerText = $(element).text().trim();
            if(headerText != ""){
              header4.push({
                text: headerText
              });
            }
          });

          data.header4 = header4;

           // get all header5
           $("h5").each((i, element) => {
            const headerText = $(element).text().trim();
            if(headerText != ""){
              header5.push({
                text: headerText
              });
            }
          });

          data.header5 = header5;


          // get all links
          $("a").each((i, element) => {
            links.push({
              text: $(element).text().trim(),
              link: $(element).attr("href"),
              target:  $(element).attr("target")
            });
          });

          data.links = links;

          console.log("data",data);
          return res.json(data);
        }).catch( error => console.log(error));

  })
  

module.exports = router;
