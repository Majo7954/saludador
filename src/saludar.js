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

function SaludadorHorario() {
  const hora = new Date().getHours();
  let saludo;

  if (hora >= 6 && hora < 12) {
      saludo = "Buenos días";
  } else if (hora >= 12 && hora < 19) {
      saludo = "Buenas tardes";
  } else {
     saludo = "Buenas noches";
  }

  return saludo;
}

export { saludar, edadp, SaludadorHorario };