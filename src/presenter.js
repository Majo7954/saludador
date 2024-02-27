import { saludar, edadp, SaludadorHorario } from "./saludar.js";

const nombre_input = document.querySelector("#nombre");
const edad_input = document.querySelector("#edad");
const genero_f_input = document.querySelector("#genero-f");
const genero_m_input = document.querySelector("#genero-m");
const idioma_select = document.querySelector("#idioma"); // Cambiado a select
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = nombre_input.value;
    const edad = parseInt(edad_input.value);
    let genero;
    if (genero_f_input.checked) {
        genero = genero_f_input.value;
    } else if (genero_m_input.checked) {
        genero = genero_m_input.value;
    }
    const idioma = idioma_select.value;
    div.innerHTML = `<p> ${SaludadorHorario(idioma)}, ${edadp(edad, genero, idioma)} ${saludar(nombre)}.</p>`;
});

