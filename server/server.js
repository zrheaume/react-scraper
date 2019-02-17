import express from "express"
import http from "http"
const app = express()
const server = http.createServer(app)
import configMiddleware from "./config/middleware"

configMiddleware(app)

function server_init(PORT) {
   server.listen(PORT, (err) => {
      if (err) {
         console.log(err)
      }
      console.log(`Server listener on port ${PORT}`)
   })
}

export {
   server,
   server_init
}