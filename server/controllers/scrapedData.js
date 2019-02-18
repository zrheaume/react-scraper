import cache from "../models/cache"
import { retrieveContent } from "../utils/scraper"

async function getCurrentContent() {
   return new Promise( async function (resolve, reject) {
      try {
         let reply = await cache.pull("current_scrape")
         return resolve(reply)
      } catch (err) {
         return reject(err)
      }
   })
}

export {
   getCurrentContent
}