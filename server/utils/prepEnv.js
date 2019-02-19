import { retrieveContent } from "./scraper"
import cache from "../models/cache"

// Sort of unnecessary to keep the flash copy of the data so long, but its only 250 small json objects.
// While we can fetch it at any time if we need to, doing so requires fetching, parsing, and extracting 
// the data and that takes time. The cached copy of the most recent request to  

export default async function () {
   return new Promise(async function (resolve, reject) {
      try {
         let scraperCacheLifetime =   12 /* <= hrsToTimeout    convert to ms => */ * 60 * 1000
         let currentContent = await retrieveContent()
         let pushConf = await cache.push(currentContent, "current_scrape")
         let scraperCache_cycleID = setInterval(
            async function () {
               try {
                  cache.pull("current_scrape").then((reply) => {
                     const currentContent = reply.content
                     retrieveContent().then((refreshedContent) => {
                        if (refreshedContent > currentContent) {
                           cache.rem("current_scrape").then((reply) => {
                              if (reply.status === 1) {
                                 cache.push(refreshedContent, "current_scrape").then((reply) => {
                                    console.log(`${reply.id} -> ${reply.status}`)
                                 })
                              } else {
                                 throw (reply)
                              }
                           })
                        } else {

                        }
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