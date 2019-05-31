var express = require("express");
var app = express();
app.use(express.static('public'));
app.use(express.static('files'));
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json())


app.get("/api/exercise", function(req, res) {
  //console.log(req.query, req.path);
  //console.log(req.method);
  const array = [req.method, req.path, req.query];
  for (var i = 0; i <= 2; i++) {
    console.log(array[i]);
  }

  res.send(array[i]);
})


app.post("/api/exercise", (req, res) => {


  // const object = req.body;
  // let text = "<h1>Hello from express</h1>";
  //
  // text += "<h2>Posr parameters</h2>";
  // text += "<p>I recieved these parameters</p>";
  //
  // text += "<ul>";
  //
  // for(let i in object){
  //   text += "<li>" + object[i] +"</li>";
  // }
  //
  // text += "</ul>";

  const object = req.body;
  let item ="";

  for(let i in object){
    item += `<li> ${object[i]}</li>`;
   }

  let text = `
  <h1>Hello from Express</h1>
  <h2>Post parameters</h2>
  <p> I received these parameters</p>
  <ul>
    ${item}
  </ul>
`;
  res.send(text)

})
app.post('/api/login', (req, res) => {
  if (req.body.user == '' || req.body.pwd == '') {
    res.status(400).end()
  } else if (req.body.user == 'mark' && req.body.pwd == 'giraffe') {
    res.status(200).json({
      user: req.body.user
    })
  } else {
    res.status(403).end()
  }
})

// COMBAK
app.listen(3000, () => console.log('Listening on port 3000'))
