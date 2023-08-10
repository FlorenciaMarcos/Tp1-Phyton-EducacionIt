document.addEventListener("DOMContentLoaded", function () {
  const guardarBtn = document.getElementById("guardarBtn");
  const alumnoInfo = document.getElementById("alumnoInfo");
  const edadInfo = document.getElementById("edadInfo");
  const materiasInfo = document.getElementById("materiasInfo");

  guardarBtn.addEventListener("click", function () {
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const materiaSelect = document.getElementById("materias");
    const selectedMateria =
      materiaSelect.options[materiaSelect.selectedIndex].text;

    alumnoInfo.textContent = ` ${nombre}`;
    alumnoInfo.style.color = "black";
    edadInfo.textContent = ` ${edad}`;
    edadInfo.style.color = "black";
    materiasInfo.innerHTML = `<li>${selectedMateria}</li>`;
    materiasInfo.style.color = "black";
  });
});
