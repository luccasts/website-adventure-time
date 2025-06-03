//Página Inicial
const video = document.getElementById("meuVideo");
const buttonMute = document.querySelector("#mute");
const volumeControl = document.getElementById("volume");
const displaysNones = document.querySelectorAll(".display-none");
const tempoInicio = 1;
const tempoLimite = 23.9;

const menuToggle = document.getElementById("menu-toggle");
const navList = document.querySelector("#nav-principal ul");
const controleBotao = document.querySelector("#controle-botao");
menuToggle.addEventListener("click", () => {
  navList.classList.toggle("active");
  controleBotao.classList.toggle("active");
});

if (video) {
  video.addEventListener("loadedmetadata", () => {
    video.currentTime = 1;
  });

  video.addEventListener("timeupdate", () => {
    if (video.currentTime >= tempoLimite) {
      video.currentTime = tempoInicio;
      video.play();
    }
  });
}
buttonMute.addEventListener("click", () => {
  console.log("mute");
  console.log(video.muted);
  video.muted = !video.muted;
  const icon = buttonMute.querySelector("i");

  if (icon.classList.contains("fa-volume-high")) {
    icon.classList.remove("fa-volume-high");
    icon.classList.add("fa-volume-xmark");
  } else {
    icon.classList.remove("fa-volume-xmark");
    icon.classList.add("fa-volume-high");
  }
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

gsap.utils.toArray(".animacao-scroll").forEach((element) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play reverse play reverse",
      markers: false, // Coloque true se quiser ver os pontos na tela
    },
    opacity: 0,
    x: -100,
    duration: 2,
    ease: "power3.out",
  });
});

gsap.utils.toArray(".titulo-principal").forEach((element) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play reverse play reverse",
      markers: false, // opcional para debug
    },
    opacity: 0,
    y: 100,
    duration: 1,
    ease: "power3.out",
  });
});
