import * as db from "../models/db"
import connect from "../config/mongo"

connect()
async function save(newItem) {
   return new Promise(async function (resolve, reject) {
      try {
         let addStatus = await db.Item.create(newItem)
         return resolve(addStatus)
      } catch (err) {
         return reject(err)
      }
   })
}
async function fetchAll() {
   return new Promise(async function (resolve, reject) {
      try {
         let allItems = await db.Item.find({})
         return resolve(allItems)
      } catch (err) {
         return reject(err)
      }
   })
}

export default {
   save,
   fetchAll
}