  function saludar(nombre) {
    return nombre;
}

function edadp(edad, genero) {
    if (edad > 30) {
        if (genero == "F") {
            return "SRA";
        } else {
            return "SR";
        }
    } else {
        if (genero == "F") {
            return "jovencita";
        } else {
            return "joven";
        }
    }
}

export { saludar, edadp };