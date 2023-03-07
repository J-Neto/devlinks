function toggleMode() {
  // Pegando o documento html
  const html = document.documentElement

  // Alternando o nome da classe
  html.classList.toggle("light")

  // Pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de José Neto, usando óculos escuros e camisa amarela."
    )
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de José Neto sorrindo, usando terno preto e com fundo azul."
    )
  }

  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }
}
