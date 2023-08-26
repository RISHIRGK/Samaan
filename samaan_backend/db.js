const mongoose = require("mongoose")
const mongo_connect=(mongo_uri)=>
{

    return mongoose.connect(mongo_uri,  {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
};
const connection = () => {
  return mongoose.connect(
    "",
    { useNewUrlParser: true, useUnifiedTopology: true }
  ).then(()=>{
    console.log("Connected to database");
  });
};
const schema = new mongoose.Schema({
  name: String,
  prive: Number,
  weigth: String,
  img_path: String,
  category: String,
  brand: String,
  flavour: String,
});

const products = mongoose.model("product", schema);
module.exports = {mongo_connect, products};
