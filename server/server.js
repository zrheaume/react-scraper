import express from "express"
import http from "http"
import scraperCacheInit from "./utils/prepEnv"

const app = express()
const server = http.createServer(app)
import configMiddleware from "./config/middleware"
configMiddleware(app)

async function setListener(PORT) {
   server.listen(PORT, (err) => {
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
      scraperCacheInit().then((after) => {
         console.log(after)
         setListener(PORT).then((listening) => {
            if (listening) return Promise.resolve(PORT)
         })
      })
   } catch (err) {
      throw err
   }
}

export {
   server,
   server_init
}