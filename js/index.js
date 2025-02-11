AOS.init();

const timeTimeOut = 3500;
const time = 300;

// Funciones de animación
const animation_1 = () => document.getElementById("intro_logo").classList.add("d-none");
const animation_2 = () => {
   document.getElementById("hero").classList.add("fade_in");
   document.getElementById("img_hero_1").classList.add("img_left_right");
   document.getElementById("img_hero_2").classList.add("img_right_left");
};
const animation_3 = () => {
   document.getElementById("span_icon").classList.remove("d-none");
   document.body.classList.remove("scroll-y-none");
};

//#region EFECTO PARALLAX
const parallaxEffect = () => {
   let position = window.scrollY;
   let img_hamburger_1 = document.getElementById("img_hamburger_1");
   if (img_hamburger_1) {
      img_hamburger_1.style.bottom = `${position * 0.01}px`;
   }
   requestAnimationFrame(parallaxEffect);
};
requestAnimationFrame(parallaxEffect);
//#endregion

//#region DETECTAR DARK-MODE EN EL NAVEGADOR
const favicon = document.getElementById("favicon");
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
favicon.href = prefersDarkMode ? "assets/crown_logo_white.png" : "assets/crown_logo.png";
//#endregion

// Ejecutar al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
   document.body.classList.add("scroll-y-none");

   // Eliminar clases de animaciones previas
   document.getElementById("img_hero_1").classList.remove("img_left_right");
   document.getElementById("img_hero_2").classList.remove("img_right_left");

   // Ejecutar animaciones en secuencia
   let currentTimeout = timeTimeOut;
   setTimeout(animation_1, currentTimeout);
   setTimeout(animation_2, currentTimeout += time);
   setTimeout(animation_3, currentTimeout += time + 2500);
});
