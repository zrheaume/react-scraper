import redisClient from "../../config/redis"
import uuid from "uuid/v4"


async function push(value, customID) {
   return new Promise(function (resolve, reject) {
      try {
         let objID = customID || uuid()
         redisClient.set(objID, JSON.stringify(value), function (err, reply) {
            if (err) throw err
            return resolve({
               id: objID,
               status: reply
            })
         })
      } catch (err) {
         return reject(err)
      }
   })
}

async function pull(objID) {
   return new Promise(function (resolve, reject) {
      try {
         redisClient.get(objID, (err, reply) => {
            if(err) throw err
            return resolve({
               id: objID,
               content: reply,
               status: "ok"
            })
         })
      } catch (err) {
         return reject(err)
      }
   })
}

async function rem(objID) {
   return new Promise(async function (resolve, reject) {
      try {
         redisClient.del(objID, (err, reply) => {
            if (err) throw err
            return resolve({
               id: objID,
               status: reply
            })
         })
      } catch (err) {
         return reject(err)
      }
   })
}

export default {
   push,
   pull,
   rem
}