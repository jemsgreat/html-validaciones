import { valida } from "./validaciones.js";

const inputs = document.querySelectorAll("input");  //aqui se seleccionan todos los inputs que tenemos en el registro.html.

inputs.forEach((input) => {
    input.addEventListener("blur", (input) =>{  // aqui agrega el listener de"blur" cuando salgadelfoco del input.
        valida(input.target);  // despues manda a llamar la funcion valida, que se encuentra en validaciones.js
    });
});
