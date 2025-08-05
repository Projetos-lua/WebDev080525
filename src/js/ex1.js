// const usuario ={
//     senha: "1234567"
// }

// const usuarioJson = JSON.stringify(usuario)
// localStorage.setItem("usuario", usuarioJson)
// console.log(usuarioJson)

const usuario = localStorage.getItem("usuario")
// const usuarioJson =JSON.parse(usuarioJson)
const dados={
    nome : "fiap",
    senha: "54321"
}

const convertUsuario=JSON.stringify(dados)
localStorage.setItem("dados", convertUsuario)

localStorage.removeItem("dados")