const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workSchema = new Schema({
  img: { type: String, required: true },
  header: { type: String, required: true },
  text: { type: String, required: true },
});

const Work = mongoose.model("Work", workSchema);

module.exports = Work;
