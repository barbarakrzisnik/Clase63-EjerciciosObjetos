// Ejercicios con Objetos, JSON y Local Storage

// PARTE 1

// 1. Crea tres objetos usuario1, usuario2, usuario3 que tengan las propiedades nombreUsuario y contrasenia como strings.


const usuario1 = {
    nombreUsuario: "barbarakr",
    contrasenia: "1234papafrita",
}

const usuario2 = {
    nombreUsuario: "martinaglr",
    contrasenia: "bolt3456",
}

const usuario3 = {
    nombreUsuario: "tetokr",
    contrasenia: "barca9080",
}

// 2. Definí una función saludar que reciba como parámetro un objeto y que modifique el HTML de tu página para que aparezca un h1 que diga "Hola, {nombreUsuario}".

const body = document.getElementById("body")

// const saludar = (objeto) => {
//     return body.innerHTML = `<h1>Hola, ${objeto.nombreUsuario}</h1>`
// }

// 3. Probá tu función con los tres objetos definidos antes.

// saludar(usuario1)
// saludar(usuario2)
// saludar(usuario3)

// 4. Definí una función modificarNombreDeUsuario que reciba dos parametros: un objeto usuario y un string nuevoNombre. La función debe retornar el objeto con la propiedad nombreUsuario modificada para tener el valor de nuevoNombre.

const modificarNombreDeUsuario = (objeto, nuevoNombre) => {
    return objeto.nombreUsuario = nuevoNombre
}

// 5.Probá tu función con los tres objetos definidos antes.

// console.log(modificarNombreDeUsuario(usuario1, "tatianamodic"))
// console.log(usuario1)

// 6. Definí una función modificarContrasenia que reciba dos parametros: un objeto usuario y un string nuevaContrasenia. La función debe retornar el objeto con la propiedad contrasenia modificada para tener el valor de nuevaContrasenia.

const modificarContrasenia = (objeto, nuevaContrasenia) => {
    return objeto.contrasenia = nuevaContrasenia
}

// console.log(modificarContrasenia(usuario1, "tata9090"))
// console.log(usuario1)

// 7. Crea la función convertirAJSON. La función debe recibir un objeto usuario como parámetro y retornar el objeto convertido a JSON.

const convertirAJSON = (objeto) => {
    return JSON.stringify(objeto)
}

//9.
let usuario1JSON = convertirAJSON(usuario1)
// console.log(usuario1JSON)

// 8. Crea la función convertirDesdeJSON. La función debe recibir una cadena JSON objetoJSON y retornar la cadena convertida a un objeto de Javascript.

const convertirDesdeJSON = (cadenaJSON) => {
    return JSON.parse(cadenaJSON)
}

//9.
let cadenaDesdeJSON = convertirDesdeJSON(usuario1JSON)
// console.log(cadenaDesdeJSON)

// 11. Definí la función guardarEnLocalStorage que reciba como parámetro un objeto de Javascript y un string, y guarde en localStorage la cadena con el string como nombre de la clave (Recordá que antes de guardar un objeto en localStorage hay que convertirlo a JSON: usá la función convertirAJSON que declaraste antes)

const guardarEnLocalStorage = (objeto, string) => {
    let objetoJSON = convertirAJSON(objeto)
    return localStorage.setItem(`${string}`, objetoJSON)
}

guardarEnLocalStorage(usuario3, "Usuario 3")

// 12. Definí la función leerDesdeLocalStorage que reciba como parámetro un string clave y retorne un objeto de Javascript con los datos guardados bajo esa clave en localStorage. (Utilizá la función convertirDesdeJSON!)

const leerDesdeLocalStorage = (string) => {
    let JSONLocalStorage = localStorage.getItem(`${string}`)
    return convertirDesdeJSON(JSONLocalStorage)
}

// console.log(leerDesdeLocalStorage("Usuario 3"))


// PARTE 2 

//USUARIO
const usuario = {
    nombreUsuario: "barbarakr",
    contrasenia: "123hola",
}

//Elementos
const sectionBienvenida = document.getElementById("section-bienvenida")
const sectionFormularioInicio = document.getElementById("section-formulario-inicio")
const tituloHeader = document.getElementById("titulo-header")
const sectionFormularioNuevoUsuario = document.getElementById("section-formulario-cambiar-usuario")


const botonIniciarSesion = document.getElementById("boton-iniciar-sesion")
const usuarioIngresado = document.getElementById("input-usuario")
const contraseniaIngresada = document.getElementById("input-contrasenia")

const botonEnviar = document.getElementById("boton-enviar")

const botonCambiarDatos = document.getElementById("cambiar-datos")
const botonCerrarSesion = document.getElementById("cerrar-sesion")
const usuarioNuevoIngresado = document.getElementById("input-usuario-nuevo")
const contraseniaNuevaIngresada = document.getElementById("input-contrasenia-nueva")
const botonEnviarNuevoUsuario = document.getElementById("boton-enviar-nuevo-usuario")

//Funciones auxiliares

const saludar = (objeto) => {
    return tituloHeader.textContent = `Hola ${objeto.nombreUsuario}`
}
if(leerDesdeLocalStorage("usuario") === true) {
    saludar(usuario)
        botonEnviar.classList.add("is-hidden");
        botonCambiarDatos.classList.remove("is-hidden");
        botonCerrarSesion.classList.remove("is-hidden");
}




botonEnviar.addEventListener("click", function(event){
    event.preventDefault()
  })
botonCambiarDatos.addEventListener("click", function(event){
    event.preventDefault()
  })
  botonCerrarSesion.addEventListener("click", function(event){
    event.preventDefault()
  })
botonEnviarNuevoUsuario.addEventListener("click", function(event){
    event.preventDefault()
  })
  

botonIniciarSesion.onclick = () => {
    sectionFormularioInicio.classList.toggle("is-hidden") 
}



let sesionIniciada = false 

const revisarDatos = (usuario) => {
    let sesionIniciada = false
    if(usuarioIngresado.value === usuario.nombreUsuario && contraseniaIngresada.value === contraseniaIngresada) {
        sesionIniciada = true;
    }
    return sesionIniciada
}

botonEnviar.onclick = () => {
    revisarDatos(usuario);
    if (sesionIniciada = true) {
        saludar(usuario)
        botonEnviar.classList.add("is-hidden");
        botonCambiarDatos.classList.remove("is-hidden");
        botonCerrarSesion.classList.remove("is-hidden");
        usuario.sesionIniciada = true;
        console.log(usuario)
        guardarEnLocalStorage(usuario.sesionIniciada, "usuario")
    }
    
}

botonCerrarSesion.onclick = () => {
    tituloHeader.textContent = "Hola"
    botonEnviar.classList.remove("is-hidden");
    botonCambiarDatos.classList.add("is-hidden")
    botonCerrarSesion.classList.add("is-hidden")
    usuario.sesionIniciada = false
    guardarEnLocalStorage(usuario.sesionIniciada, "usuario")
}

botonCambiarDatos.onclick = () => {
    sectionFormularioInicio.classList.add("is-hidden")
    sectionFormularioNuevoUsuario.classList.remove("is-hidden")
    
}


botonEnviarNuevoUsuario.onclick = () => {
    modificarNombreDeUsuario(usuario, usuarioNuevoIngresado.value)
    modificarContrasenia(usuario, contraseniaNuevaIngresada.value)
    sectionFormularioInicio.classList.remove("is-hidden")
    sectionFormularioNuevoUsuario.classList.add("is-hidden")
    guardarEnLocalStorage(usuario.sesionIniciada, "usuario")
    saludar(usuario)
    

    console.log(usuario)
}










