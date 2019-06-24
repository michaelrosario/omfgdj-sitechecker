const router = require("express").Router();
const axios = require("axios");
const cheerio = require("cheerio");
const Wappalyzer = require('wappalyzer');
// Book routes
//router.use("/books", bookRoutes);

const options = {
  debug: false,
  delay: 500,
  maxDepth: 3,
  maxUrls: 10,
  maxWait: 5000,
  recursive: true,
  userAgent: 'Wappalyzer',
  htmlMaxCols: 2000,
  htmlMaxRows: 2000,
};



router.get("/")

router.get("/wapp/:site"), function(req,res) {
  let site = req.params.site;
  let url = "https://"+site;

  console.log(url);

  const wappalyzer = new Wappalyzer(url, options);

  wappalyzer.analyze()
  .then(json => {
    process.stdout.write(`${JSON.stringify(json, null, 2)}\n`);
    console.log('RESULTS FOUND!')
    process.exit(0);
  })
  .catch(error => {
    process.stderr.write(`${error}\n`);
 
    process.exit(1);
  });
  
}


router.get("/check/:site", function(req,res){
      let site = req.params.site;
      // remove http amd https and use www   
      console.log(site);

      let url = "https://"+site;

      console.log(url);
    
      const wappalyzer = new Wappalyzer(url, options);
    
      console.log(wappalyzer);

      wappalyzer.analyze()
      .then(json => {
        process.stdout.write(`${JSON.stringify(json, null, 2)}\n`);
        console.log("Hey there! " + JSON.stringify(json, null, 2));
        process.exit(0);
      })
      .catch(error => {
        process.stderr.write(`${error}\n`);
     
        process.exit(1);
      });



      // axios.get("https://"+site)
      //   .then(response => {
      //     //console.log(response.data);
      //     const $  = cheerio.load(response.data);

      //     const data = {};
      //     // data
      //     let title = "";
      //     const meta = [];
      //     const script = [];
      //     const images = [];
      //     const header1 = [];
      //     const header2 = [];
      //     const header3 = [];
      //     const header4 = [];
      //     const header5 = [];
      //     const links = [];

      //     // get all meta
      //     $("title").each((i, element) => {
      //       title = $(element).text();
      //       data.title = title;
      //     });

      //     $("meta").each((i, element) => {
      //         let content = $(element).attr("content");
      //         if(content){
      //           content = content.trim();
      //         }
      //         meta.push({
      //           name: $(element).attr("name"),
      //           content
      //         });
      //     });

      //     data.meta = meta;

      //     // get all scripts
      //     $("script").each((i, element) => {
      //       script.push({
      //         src: $(element).attr("src")
      //       });
      //     });

      //     data.script = script;

      //     // get all images
      //     $("img").each((i, element) => {
      //       images.push({
      //         src: $(element).attr("src"),
      //         alt: $(element).attr("alt")
      //       });
      //     });

      //     data.images = images;

      //     // get all header1
      //     $("h1").each((i, element) => {
      //       const headerText = $(element).text() || "";
      //       if(headerText && headerText.trim()){
      //         header1.push({
      //           text: headerText.trim()
      //         });
      //       }
      //     });

      //     data.header1 = header1;
          
      //     // get all header2
      //     $("h2").each((i, element) => {
      //       const headerText = $(element).text() || "";
      //       if(headerText && headerText.trim()){
      //         header2.push({
      //           text: headerText.trim()
      //         });
      //       }
      //     });

      //     data.header2 = header2;

      //     // get all header3
      //     $("h3").each((i, element) => {
      //       const headerText = $(element).text() || "";
      //       if(headerText && headerText.trim()){
      //         header3.push({
      //           text: headerText.trim()
      //         });
      //       }
      //     });

      //     data.header3 = header3;

      //     // get all header4
      //     $("h4").each((i, element) => {
      //       const headerText = $(element).text() || "";
      //       if(headerText && headerText.trim()){
      //         header4.push({
      //           text: headerText.trim()
      //         });
      //       }
      //     });

      //     data.header4 = header4;

      //      // get all header5
      //      $("h5").each((i, element) => {
      //       const headerText = $(element).text() || "";
      //       if(headerText && headerText.trim()){
      //         header5.push({
      //           text: headerText.trim()
      //         });
      //       }
      //     });

      //     data.header5 = header5;

      //     // get all links
      //     $("a").each((i, element) => {
      //       links.push({
      //         text: $(element).text().trim(),
      //         link: $(element).attr("href"),
      //         target:  $(element).attr("target")
      //       });
      //     });

      //     data.links = links;

      //     console.log("data",data);
      //     return res.json(data);
      //   }).catch( error => console.log(error));

  })

  router.get("/check/:site", function(req,res){

  })

module.exports = router;