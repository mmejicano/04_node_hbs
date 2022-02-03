# Aplicacion servidor

# Conocimientos aplicados

1. librerias: express, hbs, dotenv
   > http://expressjs.com/en/starter/hello-world.html > https://github.com/pillarjs/hbs#readme
2. template engine: hbs
3. \_\_dirname no está definida en proyectos con ES Modules solo en CommonJS: const \_\_dirname = path.resolve('./');

4. contenido estatico (public: tiene prioridad sobre otras rutas)
5. Vistas: /views + home.hbs + envio datos a views + {{data}} = render('home', data)
6. componentes reutilizables /views/partials = partials {> header title=}
7. nodemon con hbs = nodemon.json, recarga server en cada cambio
8. routes: no encontrada = app.get("\*", fn) + 404.html
9. express: routes, middleware: static
10. request(peticion) ,response(respuesta)
11. JSON.stringlify()
12. Headers: content-type: application/json|csv
13. DEPLOY requiere dotenv= .env + script start
14. GIT: .gitignore + github

> _Handlebars does **not provide** a way to import or **extend a template**, but through the use of **helpers** you can create a similar result._

### git commands

´´´sh
git checkout -- .
git add .
git rm package-lock.json --cached
git status
´´´
