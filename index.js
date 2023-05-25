const express = require('express') // Importo el módulo de express
const servidor = express()        // Ejecuto el módulo de express
const hbs = require('hbs')       // importo el módulo de hbs para el motor de plantillas

servidor.set('puerto', process.env.PORT || 80) // Creo la variable puerto que puede ser que use un puerto establecido en algún servidor o sino utiliza el puerto 80
servidor.listen(servidor.get('puerto'))        // El servidor escucha en el puerto establecido

servidor.set('view engine','hbs')              // Le indico al servidor que voy a usar un motor de plantillas , en este caso hbs
servidor.use(express.static(`${__dirname}/views`))                 // Le indico a mi servidor donde están los archivos estáticos que van a ser enviados al FRONTEND
hbs.registerPartials(`${__dirname}/views/partials`)                // Registro los partials, son archivos que van a estar presentes en multiples vistas

servidor.get('/',(req,res)=>{
    res.render('index')
})

servidor.get('/samba',(req,res)=>{
    res.render('samba')
})
