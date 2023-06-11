const { servidor } = require('./config')
const { Instalar_samba, Borrar_samba } = require('./funciones_servidor/funciones')
servidor.get('/',(req,res)=>{
    res.render('index')
})
servidor.post('/instalar',(req,res)=>{
    const { funcion } = req.body
    funcion==="Instalar_Samba" ? Instalar_samba() : console.log("no se instaló samba")
    
})
