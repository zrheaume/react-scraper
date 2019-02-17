import "dotenv/config"

const connectionStr = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_SECRET}@ds139295.mlab.com:39295/heroku_spj8wq3x`