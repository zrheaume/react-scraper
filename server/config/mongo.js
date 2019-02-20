import "dotenv/config"
import mongooose from "mongoose"

const connectionStr = process.env.MONGODB_URI || `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_SECRET}@ds139295.mlab.com:39295/heroku_spj8wq3x`

export default async function connect() {
   return new Promise(async function (resolve, reject) {
      try {
         mongooose.connect(connectionStr, { useNewUrlParser: true }).then((after) => {
            return resolve(after)
         })
      } catch (err) {
         if (err) return reject(err)
      }
   })
}