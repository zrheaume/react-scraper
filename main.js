import "dotenv/config"
import { server_init  } from "./server"

const PORT = process.env.PORT || 8080

server_init (PORT)