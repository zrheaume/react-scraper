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
         $("#main").find("ol").children(".expanded").each((i, searchResult) => {
            // console.log(i)
            let item = {}
            item.type = $(searchResult).find(".visualIndicator").text().trim().toLowerCase()
            item.link = $(searchResult).find(".result-heading").children("a").attr("href").trim()
            item.name = $(searchResult).find(".result-heading").children("a").text().trim()
            item.desc = $(searchResult).find(".result-title").text().trim()
            let testResults = $(searchResult).find(".result-item")
               .each((i, subheading) => {
                  if ($(subheading).find("strong").text().trim() === "Committees:") {
                     item.committees = $(subheading).text().trim().split(": ")[1]
                  }
               })

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