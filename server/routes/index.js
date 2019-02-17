import express from "express"
import path from "path"
import apiRoutes from "./api"

const router = new express.Router()

// router.use("/api", apiRoutes)
router.use(function(req, res) {
   res.sendFile(path.join(__dirname, "../client/index.html"))
})

export default router