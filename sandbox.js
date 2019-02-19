import * as scraper from "./server/utils/scraper"

scraper.retrieveContent().then((results) => {
   let scrape = results
   console.log(scrape)
})