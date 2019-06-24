const router = require("express").Router();

router.use("/site",require("./site.js"));
  
const axios = require("axios");
const cheerio = require("cheerio");
const Wappalyzer = require('wappalyzer');
// Book routes
//router.use("/books", bookRoutes);


router.get("/")

router.get("/wapp/:site", function(req,res) {
  let site = req.params.site;
  let url = "https://"+site;
  console.log("URL to be sent is: "+url);

  return fetch(`https://api.wappalyzer.com/lookup/v1/?url=${site}&callback_url=${site}`, {
    headers: {
      Authorization: `Bearer wappalyzer.api.demo.key`
    }
  }).then(response => {
    console.log("Wappa Server RES:");
    console.log(response);
    return response.json();
  }).then(jsonResponse => {
    console.log("Wappa JSON Data:");
    console.log(JSON.stringify(jsonResponse));
    // return console.log(jsonResponse);
  })

  // fetch('http://example.com/movies.json')
  // .then(function(response) {
  //   return response.json();
  // })
  // .then(function(myJson) {
  //   console.log(JSON.stringify(myJson));
  // });

})

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
          let title = "";
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
          $("title").each((i, element) => {
            title = $(element).text();
            data.title = title;
          });

          $("meta").each((i, element) => {
              let content = $(element).attr("content");
              if(content){
                content = content.trim();
              }
              meta.push({
                name: $(element).attr("name"),
                content
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
            const headerText = $(element).text() || "";
            if(headerText && headerText.trim()){
              header1.push({
                text: headerText.trim()
              });
            }
          });

          data.header1 = header1;
          
          // get all header2
          $("h2").each((i, element) => {
            const headerText = $(element).text() || "";
            if(headerText && headerText.trim()){
              header2.push({
                text: headerText.trim()
              });
            }
          });

          data.header2 = header2;

          // get all header3
          $("h3").each((i, element) => {
            const headerText = $(element).text() || "";
            if(headerText && headerText.trim()){
              header3.push({
                text: headerText.trim()
              });
            }
          });

          data.header3 = header3;

          // get all header4
          $("h4").each((i, element) => {
            const headerText = $(element).text() || "";
            if(headerText && headerText.trim()){
              header4.push({
                text: headerText.trim()
              });
            }
          });

          data.header4 = header4;

           // get all header5
           $("h5").each((i, element) => {
            const headerText = $(element).text() || "";
            if(headerText && headerText.trim()){
              header5.push({
                text: headerText.trim()
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

  // router.get("/check/:site", function(req,res){

  // })

module.exports = router;