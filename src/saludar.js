function saludar(nombre) {
    return nombre;
}

function edadp(edad, genero, idioma) {
    if (idioma === "ES") {
        if (edad > 30) {
            return genero === "F" ? "SRA" : "SR";
        } else {
            return genero === "F" ? "jovencita" : "joven";
        }
    } else if (idioma === "EN") {
        if (edad > 30) {
            return genero === "F" ? "Miss" : "Mister";
        } else {
            return genero === "F" ? "girl" : "boy";
        }
    }
}

function SaludadorHorario(idioma) {
    const hora = new Date().getHours();
    let saludo;
    if (idioma === "ES") {
        if (hora >= 6 && hora < 12) {
            saludo = "Buenos días";
        } else if (hora >= 12 && hora < 19) {
            saludo = "Buenas tardes";
        } else {
            saludo = "Buenas noches";
        }
    } else if (idioma === "EN") {
        if (hora >= 6 && hora < 12) {
            saludo = "Good morning";
        } else if (hora >= 12 && hora < 19) {
            saludo = "Good afternoon";
        } else {
            saludo = "Good night";
        }
    }
    return saludo;
}

export { saludar, edadp, SaludadorHorario };
