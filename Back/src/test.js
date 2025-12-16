const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Docker is working! Backend container is running 🚀");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Test server running on port ${PORT}`);
});
