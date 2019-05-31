const express = require("express");
const app = express();
const db = require("./db");
const port = 3000;
app.use(express.json());


app.get("api/v1/pois", (req, res) => {
  const pois = db.getPoi();
  res.send(pois);
});

//
app.get("api/vi/pois/:id", (req, res) => {
  const id = request.params.id;
  const pois = db.getPoi(id);
  res.send(poi);

});

 app.get("api/vi/pois/:id", (req, res) => {
  const id = request.params.id;
   const pois = db.getPoi(id);
   if(pois){
     res.send(poi);
   }else{
     res.status(404).send()
  }});

app.post("/api/v1/pois", (req, res) => {
  let poi = req.body;
  poi = db.createPoi(poi);
  res.status(201).send(poi);
});


app.listen(port, () => {
  console.log(" server listening on ${port}");
})
