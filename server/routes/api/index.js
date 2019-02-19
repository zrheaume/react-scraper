import express from "express"
const router = express.Router()
import { getCurrentContent } from "../../controllers/scrapedData"

router.get("/current", function (req, res) {
   getCurrentContent().then(function (reply) {
      // console.log(`Content: ${reply.content}`)
      res.json(JSON.parse(reply.content))
   })
})

router.get("/saved", function (req, res) {
   
})


router.use("/", function (req, res) {
   res.send({
      "api": {
         "name": "react-scraper",
         "version": "1.0.0",
         "available endpoints": {
            "/bills": {
               "get": "Retrieves saved articles",
               "post": "Adds posted article to db of saved articles for future reference",
               "delete": "USE api/bills/:id ; Removes saved bill of specified id"
            }
         }
      }
   })
})

export default router