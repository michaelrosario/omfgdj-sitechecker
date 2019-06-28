const router = require("express").Router();
const axios = require("axios");
const cheerio = require("cheerio");
const Wappalyzer = require('wappalyzer');
const captureWebsite = require('capture-website');
const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminMozjpeg = require('imagemin-mozjpeg');
const siteController = require("../../controllers/siteController");


router
  .route("/")
  .get(siteController.findAll)
  .post(siteController.create);

router
  .route("/url")
  .get(siteController.findByUrl);

router
  .route("/:id")
  .get(siteController.findById)
  .put(siteController.update)
  .delete(siteController.remove);

router.get("/check/:site", function(req,res){
    let site = req.params.site;
    let website = "https://"+site;
    const data = {};
    // remove http amd https and use www  
    (async () => {
      await captureWebsite.base64(website,{
        width: 640,
        height: 480,
        type: 'jpeg',
        quality: .50
      }).then(image => {
        
        imagemin.buffer(image, {
          plugins: [
            imageminJpegtran(),
            imageminMozjpeg({quality: 50})
          ]
        }).then(file => {

          var base64data = new Buffer(file).toString('base64');
          console.log(base64data);
          data.image = "data:image/png;base64,"+base64data;

        });
      });
    })();
    
    axios.get(website)
      .then(response => {
        //console.log(response.data);
        const $  = cheerio.load(response.data);

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


        // WAPPALYZER
        let url = "https://"+site;
        console.log("---- WAPPALYZER ----");
        
        axios.get(`https://api.wappalyzer.com/analyze/v1/?url=${url}`, {
          headers: {
            "X-Api-Key": "wappalyzer.api.demo.key"
          }
        }).then(response => {
          console.log("Wappa Server RES:");
          
              data.wappalyzer = response.data.applications;
              return res.json(data);
            // return console.log(jsonResponse);
          }).catch( error => {
            console.log(error)
            console.log("---- WAPPALYZER FAILED ----");
            return res.json(data);
          });

        
      }).catch( error => console.log(error));

})

module.exports = router;
// HERRO werd