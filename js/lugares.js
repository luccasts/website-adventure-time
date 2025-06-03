const links = document.querySelectorAll(".link-transicao");
window.onload = () => {
  const transicao = document.querySelector(".img-transicao");
  if (transicao) {
    transicao.remove();
  }
};

window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    const transicao = document.querySelector(".img-transicao");
    if (transicao) {
      transicao.remove();
    }
  }
});
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const destino = link.getAttribute("href");
    const estaEmPages = window.location.pathname.includes("/pages/");

    const prefixoCaminho = estaEmPages ? "../../" : "";

    let imgSrc = "";

    if (destino.includes("reino-doce")) {
      imgSrc = `${prefixoCaminho}images/pag-lugares/candy-kingdom.jpg`;
    } else if (destino.includes("casa-arvore")) {
      imgSrc = `${prefixoCaminho}images/pag-lugares/the-tree-house.png`;
    } else if (destino.includes("reino-gelado")) {
      imgSrc = `${prefixoCaminho}images/pag-lugares/ice-kingdom.webp`;
    }

    const img = document.createElement("img");
    img.src = imgSrc;
    img.classList.add("img-transicao");

    document.body.appendChild(img);

    // Forçar o reflow
    void img.offsetWidth;

    // Adiciona a classe que faz expandir
    img.classList.add("expandindo");

    setTimeout(() => {
      window.location.href = destino;
    }, 1000); // Tempo igual ao da transição no CSS
  });
});
