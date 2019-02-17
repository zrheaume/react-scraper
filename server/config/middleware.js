import express from "express"
import path from "path"
import routes from "../routes"
export default function (app) {
   app.use(express.json())
   app.use(express.urlencoded({ extended: true }))
   app.use(express.static(path.resolve("server/client")))
   app.use(routes)
}