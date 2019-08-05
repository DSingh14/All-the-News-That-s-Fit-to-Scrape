var mongoose = require("mongoose");

// save a reference to the Schema constructor
var Schema = mongoose.Schema;
// using the schema constructoe, create a new NoteSchema Object
var NoteSchema = new Schema({
    title: String,
    body: String

});
// this creates our model from the above Schema,using moongoose's model method
var Note = mongoose.model("note", NoteSchema);
// export the Note model
model.exports = Note;