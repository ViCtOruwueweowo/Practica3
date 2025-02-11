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
   let position = window.scrollY;AOS.init();

   // 🔹 Animaciones
   const animations = [
      () => document.querySelector("#intro_logo")?.classList.add("d-none"),
      () => {
         document.querySelector("#hero")?.classList.add("fade_in");
         document.querySelector("#img_hero_1")?.classList.add("img_left_right");
         document.querySelector("#img_hero_2")?.classList.add("img_right_left");
      },
      () => {
         document.querySelector("#span_icon")?.classList.remove("d-none");
         document.body.classList.remove("scroll-y-none");
      }
   ];
   
   // 🔹 Efecto Parallax
   const parallaxEffect = () => {
      const img_hamburger = document.querySelector("#img_hamburger_1");
      if (!img_hamburger) return;
      img_hamburger.style.bottom = `${window.scrollY * 0.01}px`;
      requestAnimationFrame(parallaxEffect);
   };
   requestAnimationFrame(parallaxEffect);
   
   // 🔹 Detectar Dark Mode y cambiar favicon
   document.querySelector("#favicon").href = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "assets/crown_logo_white.png"
      : "assets/crown_logo.png";
   
   // 🔹 Ejecutar al cargar el DOM
   document.addEventListener("DOMContentLoaded", () => {
      document.body.classList.add("scroll-y-none");
   
      // Reset de animaciones previas
      ["#img_hero_1", "#img_hero_2"].forEach(selector => 
         document.querySelector(selector)?.classList.remove("img_left_right", "img_right_left")
      );
   
      // Ejecutar animaciones en secuencia
      let delay = 3500;
      animations.forEach(anim => setTimeout(anim, delay += 300));
   });
   
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
