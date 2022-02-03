# Aplicacion servidor

# Conocimientos aplicados

1. librerias: express
   http://expressjs.com/en/starter/hello-world.html
2. template engine: hbs
3. \_\_dirname no está definida en proyectos con ES Modules solo en CommonJS: const \_\_dirname = path.resolve('./');

4) contenido estatico (public: tiene prioridad sobre otras rutas) + envio datos a views + {{data}}
5) partials {> header title=}
6) nodemon con hbs

7) express: routes, middleware
8) request(peticion) ,response(respuesta)
9) JSON.stringlify()
10) Headers: content-type: application/json|CSV

11) routes: app.get("\*", fn)
12) middleware: static
