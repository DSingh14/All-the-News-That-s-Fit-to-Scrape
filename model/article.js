var mongoose = require("mongoose");
var Note = require("./Note");
// save a refernce to the Schema constructor
var Schema = mongoose.Schema;
//  Using the schema constructor ,create a new UserSchema object
var ArticleSchema = new Schema({

    // title
    title: {
        type: String,
        required: true
    },
    // link
    link: {
        type: String,
        required: true
    },
    // summary
    summary: {
        type: String,
        required: true
    },
    // saved
    saved: {
        type: Boolean,
        default: false
    },
    notes: [{
        type: Schema.Types.ObjectId,
        ref: "Note"
    }]


});
// this create our model from the Schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);

//  Export the Article model
module.export = Article;
