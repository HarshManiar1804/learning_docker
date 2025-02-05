const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  return res.json({ message: "hello from docker image" });
});
app.listen(PORT, () => {
  console.log(`server is running on port : ${PORT} `);
});
