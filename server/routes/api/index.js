import express from "express"
const router = express.Router()
import { getCurrentContent } from "../../controllers/scrapedData"
import items from "../../controllers/items"

router.get("/current", function (req, res) {
   getCurrentContent().then(function (reply) {
      // console.log(`Content: ${reply.content}`)
      res.json(JSON.parse(reply.content))
   })
})

router.get("/saved", function (req, res) {
   items.fetchAll().then((allItems) => {
      res.json(allItems)
   })
}).post(function (req, res) {
   let toSave = req.body
   items.save(toSave).then((status) => {
      res.send(status)
   })
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