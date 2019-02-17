import redis from "redis"

const URL = process.env.REDIS_URL || "127.0.0.1:6379"
let redisClient = redis.createClient(URL)

export default redisClient