const menuBoton = document.getElementById("menuBoton");
const menuLista = document.getElementById("menuLista");

menuBoton.addEventListener("click", function () {
  menuLista.classList.toggle("abierto");

  const estaAbierto = menuLista.classList.contains("abierto");
  menuBoton.setAttribute("aria-expanded", estaAbierto);
});

const enlacesMenu = menuLista.querySelectorAll("a");
enlacesMenu.forEach(function (enlace) {
  enlace.addEventListener("click", function () {
    menuLista.classList.remove("abierto");
    menuBoton.setAttribute("aria-expanded", false);
  });
});

document.getElementById("anio").textContent = new Date().getFullYear();
