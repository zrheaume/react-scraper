import mongoose, { mongo } from "mongoose"

const NoteSchema = new mongoose.Schema({
   author: String,
   body: String
})

const Note = mongoose.model("Note", NoteSchema)
export { Note } 