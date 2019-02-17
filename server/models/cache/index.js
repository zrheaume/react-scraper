import redisClient from "../../config/redis"
import uuid from "uuid/v4"

async function push(value) {
   try {
      let objKey = uuid()
      redisClient.set(objKey, JSON.stringify(value), (err, reply)=>{
         if (err) throw err 
         if (reply) Promise.resolve([objKey, reply])
      })
   } catch (err) {
      return Promise.reject(err)
   }
}

async function pull(objKey) {
   try {
      redisClient.get(objKey, ( res ) => {
         return Promise.resolve(res)
      })
   } catch (err) {
      return Promise.reject(err)
   }
}

export default {
   push,
   pull
}