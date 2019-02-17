import "dotenv/config"

const connectionStr = `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_SECRET}@scraperdb-4ghjo.mongodb.net/test?retryWrites=true`