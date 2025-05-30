//Página Inicial
const video = document.getElementById("meuVideo");
const buttonPlay = document.querySelector("#play");
const buttonMute = document.querySelector("#mute");
const volumeControl = document.getElementById("volume");
const displaysNones = document.querySelectorAll(".display-none");

buttonPlay.addEventListener("click", () => {
  video.currentTime = 22;
  video.loop = false;
  end = true;
  displaysNones.forEach((el) => {
    el.style.display = "none";
  });
  video.style.filter = "brightness(100%)";
});

buttonMute.addEventListener("click", () => {
  console.log("mute");
  console.log(video.muted);
  video.muted = !video.muted;
  buttonMute.innerHTML = buttonMute.innerHTML === "🔊" ? "🔇" : "🔊";
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
  buttonMute.innerHTML = "🔊";
});
