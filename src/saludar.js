  function saludar(nombre) {
    return nombre;
}

function edadp(edad, genero, idioma) {
  if (idioma == "ES") {
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
  } else if (idioma === "IN") {
      if (edad > 30) {
          if (genero == "F") {
              return "Miss";
          } else {
              return "Mister";
          }
      } else {
          if (genero == "F") {
              return "girl";
          } else {
              return "boy";
          }
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
 } else if (idioma === "IN") {
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