// import * as scraper from "./server/utils/scraper"

// scraper.retrieveContent().then((results) => {
//    let scrape = results
//    console.log(scrape)
// })
import mongoose from "mongoose"
import * as db from "./server/models/db"

db.Item.create({
   type: "test",
   desc : "A test entry"
}).then((res) => {
   console.log(res)
}).catch((err) => {
   console.log(err)
})