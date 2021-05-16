const axios = require('axios');

axios.get("https://reqres.in/api/users")
.then(respuesta => console.log(respuesta.data.data))
.catch(error => console.log(error))

console.log("cambio nuevo !!");
console.log("otro cambio");