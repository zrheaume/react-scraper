import axios from "axios"

async function fetchCurrent() {
   return new Promise(async function (resolve, reject) {
      try {
         let res = await axios.get("/api/current")
         return resolve(res.data)
      } catch (err) {
         return reject(err)
      }
   })
}

async function fetchSaved() {
   return new Promise(async function (resolve, reject) {
      try {
         let res = await axios.get("/api/saved")
         return resolve(res.data)
      } catch (err) {
         return reject(err)
      }
   })
}

export {
   fetchCurrent,
   fetchSaved
}