// import * as scraper from "./server/utils/scraper"

// scraper.retrieveContent().then((results) => {
//    let scrape = results
//    console.log(scrape)
// })
import connect from "./server/config/mongo"
import * as db from "./server/models/db"

// connect().then((goose) => {
//    // console.log(goose.connections[0].collections)
//    db.Item.create({
//       type: "test",
//       desc: "A test entry"
//    }).then((res) => {
//       console.log(res)
//    }).catch((err) => {
//       console.log(err)
//    })
// })

import item from "./server/controllers/items"