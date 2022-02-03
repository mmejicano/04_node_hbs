import express from "express";

const app = express();
const port = 8000;
const { pathname: root } = new URL("../src", import.meta.url);

app.set("view engine", "hbs");
app.set("views", root + "/views");

// contenido estatico
app.use(express.static("public"));

//app.get('/', function (req,res) {
//  res.send('Pagina personal')
//})

app.get("/home", function (req, res) {
  res.render("home", {titulo: 'Home Page'}); // no nesita extension
});
app.get("*", function (req, res) {
  res.sendFile(root + "/../public/error.html");
});

app.listen(port, () => {
  console.log(`Server running  https:://localhost:${port}`);
});
