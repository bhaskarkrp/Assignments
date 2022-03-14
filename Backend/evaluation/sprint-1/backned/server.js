const express = require("express");
const app = express();
var cors = require("cors");
const fs = require("fs");
const address = require("./adress.json");

const port = 8000;

app.use(express.json());
app.use(cors());

app.get("/api/addresses", (req, res) => {
  res.send(address);
});

app.post("/api/addresses", (req, res) => {
  // console.log(req.body);
  address.push(req.body);
  res.json(req.body);

  fs.readFile("./adress.json", "utf-8", function (err, data) {
    if (err) throw err;

    var arrayOfAdresses = JSON.parse(data);
    arrayOfAdresses.push(req.body);
    // console.log(arrayOfAdresses);
    fs.writeFile(
      "./adress.json",
      JSON.stringify(arrayOfAdresses),
      "utf-8",
      function (err) {
        if (err) throw err;
        console.log("Done Posting!");
      }
    );
  });
});

// app.delete("/api/addresses/:id", (req, res) => {
//   const { id } = req.params;
// });

app.listen(port, () => {
  console.log("listening on port " + port);
});
