const express = require("express");
const app = express();

// homepage
app.get('/',  (req,res) => {
res.send("node and express setup successful");
})
const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server Running at ${port}`)
});