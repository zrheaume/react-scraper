import cache from "../models/cache"
cache.push({ session: Date.now() })

async function onScrape(items) {
   try {
      cache.push({ items: [items] })
         .then((something) => {
            console.log(something)
         })
         .catch((err)=> {throw err})
   } catch (err) {

   }
}

export {
   onScrape
}