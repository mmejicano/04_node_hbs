import express from 'express';
import path from 'path';
import hbs from 'hbs';
import 'dotenv/config';
const app = express();

const port = process.env.PORT || 8000;
// const { pathname: root } = new URL('../src', import.meta.url);
const __dirname = path.resolve('./');

// handblebars
app.set('view engine', 'hbs');
app.set('views', __dirname + '/src/views');
hbs.registerPartials(__dirname + '/src/views/partials');

// contenido estatico
app.use(express.static('public'));

//app.get('/', function (req,res) {
//  res.send('Pagina personal')
//})

app.get('/', function (req, res) {
  res.render('home', { titulo: 'Home Page' }); // no nesita extension
});

app.get('/generic', function (req, res) {
  res.render('generic', { titulo: 'Home Page' }); // no nesita extension
});

app.get('/elements', function (req, res) {
  res.render('elements', { titulo: 'Home Page' }); // no nesita extension
});

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
  console.log(`Server running  http://localhost:${port}`);
});
