//Página Inicial
const video = document.getElementById("meuVideo");
const buttonMute = document.querySelector("#mute");
const volumeControl = document.getElementById("volume");
const displaysNones = document.querySelectorAll(".display-none");

buttonMute.addEventListener("click", () => {
  console.log("mute");
  console.log(video.muted);
  video.muted = !video.muted;
  buttonMute.innerHTML =
    buttonMute.innerHTML === `<i class="fa-solid fa-volume-high"></i>`
      ? `<i class="fa-solid fa-volume-xmark"></i>`
      : `<i class="fa-solid fa-volume-high"></i>`;
});

video.addEventListener("timeupdate", () => {
  if (video.currentTime >= 24 && end) {
    window.location.href = "pages/lugares.html";
  }
});

video.addEventListener("loadedmetadata", () => {
  video.currentTime = 1;
});

volumeControl.addEventListener("input", () => {
  video.volume = volumeControl.value;
});

volumeControl.addEventListener("click", () => {
  video.muted = false;
  buttonMute.innerHTML = `<i class="fa-solid fa-volume-high"></i>`;
});


// Registrar o plugin
gsap.registerPlugin(ScrollTrigger);


// gsap.from("#pag-lugares .titulo-principal", {
//   scrollTrigger: {
//     trigger: "#pag-lugares .titulo-principal",
//     start: "top bottom",
//     toggleActions: "restart none none none",
//   },
//   x:-400,
//   duration: 3,
//   ease: "power2.out",
// });

gsap.utils.toArray('.animacao-scroll').forEach((element) => {
  gsap.from(element, {
  scrollTrigger: {
    trigger: element,
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play reverse play reverse",
    markers: false // Coloque true se quiser ver os pontos na tela
  },
  opacity: 0,
  x: -100,
  duration: 2,
  ease: "power3.out",
});
})
// gsap.from("#div-container-header", {
//   scrollTrigger: {
//     trigger: "#div-container-header",
//     start: "top 80%",
//     end: "bottom 20%",
//     toggleActions: "play reverse play reverse",
//     markers: true // Coloque true se quiser ver os pontos na tela
//   },
//   opacity: 0,
//   x: -100,
//   duration: 2,
//   ease: "power3.out",
// });

gsap.utils.toArray('.titulo-principal').forEach((element) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play reverse play reverse",
      markers: true // opcional para debug
    },
    opacity: 0,
    y: 100,
    duration: 1,
    ease: "power3.out",
  });
});