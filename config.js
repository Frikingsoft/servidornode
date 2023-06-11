const express = require('express')
const hbs = require('hbs')
const servidor = express()
const { exec } = require('child_process') 
servidor.set('puerto',process.env.PORT || 80)

servidor.listen(servidor.get('puerto'))

servidor.use(express.static(`${__dirname}/views`));
servidor.use(express.static(`${__dirname}/views/js`));
servidor.set('view engine','hbs')  
hbs.registerPartials(`${__dirname}/views/partials`) 
servidor.use(express.urlencoded({extended:false}))
servidor.use('/css',express.static(`${__dirname}/node_modules/bootstrap/dist/css`))
servidor.use('/js', express.static(`${__dirname}/node_modules/bootstrap/dist/js`));
servidor.use(express.json())


module.exports = {
    servidor,
    exec
}
