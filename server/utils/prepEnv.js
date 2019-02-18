import { retrieveContent } from "./scraper"
import cache from "../models/cache"

export default async function () {
   return new Promise(async function (resolve, reject) {
      try {
         let scraperCacheLifetime = 5 /* <= minsToTimeout    convert to ms => */ * 60 * 1000
         let currentContent = await retrieveContent()
         let pushConf = await cache.push(currentContent, "current_scrape")
         let scraperCache_cycleID = setInterval(
            async function () {
               try {
                  cache.rem("current_scrape").then((reply) => {
                     console.log(reply.status)
                     retrieveContent().then((refreshedContent) => {
                        cache.push(refreshedContent, "current_scrape").then((reply) => {
                           console.log(`${reply.id} -> ${reply.status}`)
                        })
                     })
                  })
               } catch (err) {
                  throw err
               }
            },
            scraperCacheLifetime)
         return resolve(true)
      }
      catch (err) {
         return reject(err)
      } 
   })
}