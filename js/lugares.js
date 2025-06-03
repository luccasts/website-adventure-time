const links = document.querySelectorAll(".link-transicao");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const destino = link.getAttribute("href");
    console.log(destino);
    // Aqui define qual imagem usar na transição dependendo do link
    let imgSrc = "";
    if (destino.includes("reino-doce")) {
      imgSrc = "images/pag-lugares/candy-kingdom.jpg";
    } else if (destino.includes("casa-arvore")) {
      imgSrc = "images/pag-lugares/the-tree-house.png";
    } else if (destino.includes("reino-gelado")) {
      imgSrc = "images/pag-lugares/ice-kingdom.webp";
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
      window.location.href += destino;
    }, 1000); // Tempo igual ao da transição no CSS
  });
});
