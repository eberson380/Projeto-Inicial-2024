function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")
  // substituir a imagem e frase
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light e frase light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "foto de eberson silva com a mão no queixo e fundo de grama verde atrás"
    )
  }
  // se tiver sem light mode, manter a imagem normal e frase também
  else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "foto de eberson silva olhando para a sua esquerda com uma parede branca atrás ebersonsilva"
    )
  }
}
