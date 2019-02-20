import axios from "axios"

async function postItem(item) {
   return new Promise(async function (resolve, reject) {
      try {
         let res = await axios.post("/api/saved", item)
         return resolve(res)
      } catch (err) {
         return reject(err)
      }
   })
}

async function remItem(itemID) {
   return new Promise(async function (resolve, reject) {
      try {
         let res = await axios.delete(`/api/saved/${itemID}`)
         if (res.data.rem) {
            return resolve(res.data.rem)
         } else {
            throw itemID
         }
      } catch (err) {
         return reject(err)
      }
   })
}

export {
   postItem,
   remItem
}