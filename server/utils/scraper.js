import axios from "axios"
import cheerio from "cheerio"
import htmlparser2 from "htmlparser2"

async function fetchTarget(URL = "https://www.congress.gov/search?q={%22source%22:%22legislation%22,%22congress%22:%22116%22}&pageSort=dateOfIntroduction:desc&pageSize=250") {
   try {
      let raw_response = await axios.get(URL)
      let doc = raw_response.data
      let dom = htmlparser2.parseDOM(doc)
      let cheerioStatic = cheerio.load(dom)
      return Promise.resolve(cheerioStatic)
   } catch (err) {
      return Promise.reject(err)
   }
}

async function retrieveContent() {
   return new Promise(async function (resolve, reject) {
      try {
         console.log("Fetching doc, loading into cheerio parser")
         let $ = await fetchTarget()
         console.log("Doc fetched. Attempting to map")
         let results = []
         $("#main").find("ol").children(".expanded").each((i, elem) => {
            // console.log(i)
            let item = {}
            item.type = $(elem).find(".visualIndicator").text().toLowerCase()
            item.link = $(elem).find(".result-heading").children("a").attr("href")
            item.name = $(elem).find(".result-heading").children("a").text()
            item.desc = $(elem).find(".result-title").text()
            results.push(item)
         })
         console.log("Doc mapped. Returning to previous task")
         return resolve(results)
      } catch (err) {
         return reject(err)
      }
   })
}

export {
   retrieveContent
}