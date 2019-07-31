const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/reactreadinglist"
  );

const workSeed = [
    {
        img: "https://a.1stdibscdn.com/archivesE/upload/1121189/f_104953211524037920120/10495321_master.jpg?width=768",
        header: "Resin Table",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        img: "https://a.1stdibscdn.com/radius-three-shelf-walnut-etagere-with-two-drawers-and-blackened-brass-details-for-sale/1121189/f_118895611538202388898/11889561_master.jpg?width=768",
        header: "Bookshelf",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        img: "https://a.1stdibscdn.com/pierre-guariche-side-table-france-1950-for-sale/1121189/f_145857711556955329454/14585771_master.jpg?width=768",
        header: "Side Table",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
];

db.Work
  .remove({})
  .then(() => db.Work.collection.insertMany(workSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });