const express = require("express");
const cors = require("cors");
const { mongo_connect, products } = require("./db.js");
const app = express();
const port = 8000;
app.use(cors())
app.get("/api", async (req, res) => {
  const data = await products.find();
  console.log(data);
  res.status(200).send(JSON.stringify(data));
});

const start = async () => {
  try {
    await mongo_connect(
      "mongodb+srv://rushirgk05:rushirgk@cluster0.pdn4ibp.mongodb.net/samaan"
    ).then(() => {
      console.log("connected to rank Data");
    });
    app.listen(port, (err) => {
      if (err) {
        console.log(`failed connecting to port ${port} : ${err}`);
      } else {
        console.log(`successfully connected to port ${port}`);
      }
    });
  } catch (err) {
    console.log(err);
  }
};
start();
