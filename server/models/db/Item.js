import mongoose from "mongoose"

const ItemSchema = new mongoose.Schema({
   type: String,
   link: String,
   name: String,
   desc: String,
   committees: String,
   note: {
      type: mongoose.Schema.Types.ObjectId
   }
})

const Item = mongoose.model('Item', ItemSchema)
export default Item