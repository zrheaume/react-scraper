import express from "express"
import scraperCacheInit from "./utils/prepEnv"
import logger from "morgan"

const app = express()
import configMiddleware from "./config/middleware"

configMiddleware(app)
app.use(logger("combined"))

async function setListener(PORT) {
   app.listen(PORT, (err) => {
      if (err) {
         console.log(err)
         return Promise.reject(err)
      } else {
         console.log(`Server listener on port ${PORT}`)
         return Promise.resolve(true)
      }
   })
}

async function server_init(PORT) {
   try {
      let cacheStartedGood = scraperCacheInit()
      setListener(PORT).then((listening) => {
         if (listening && cacheStartedGood) return Promise.resolve(PORT)
      })
   } catch (err) {
      throw err
   }
}

export {
   server_init
}