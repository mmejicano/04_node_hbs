import express from 'express';
import path from 'path';

const app = express();
const port = 8000;
// const { pathname: root } = new URL('../src', import.meta.url);
const __dirname = path.resolve('./');

app.set('view engine', 'hbs');
app.set('views', __dirname + '/src/views');

// contenido estatico
app.use(express.static('public'));

//app.get('/', function (req,res) {
//  res.send('Pagina personal')
//})

app.get('/home', function (req, res) {
  res.render('home', { titulo: 'Home Page' }); // no nesita extension
});

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/error.html');
});

app.listen(port, () => {
  console.log(`Server running  https:://localhost:${port}`);
});
