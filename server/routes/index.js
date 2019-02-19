import express from "express"
import path from "path"
import apiRoutes from "./api"
import logger from "morgan"
const router = new express.Router()
router.use("/api", apiRoutes)
router.use(function(req, res) {
   res.sendFile(path.resolve("client/build/index.html"))
})
router.use(logger("combined"))
export default router