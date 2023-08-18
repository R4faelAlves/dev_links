function toggleMode() {
  const html = document.documentElement

  //if(html.classList.contains('light')) {
  // html.classList.remove('light')
  //} else{
  //html.classList.add("light")}

  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver em light mode, adicionar a imagem e texto light
    img.setAttribute("src", "/Assets/assets/foto_light.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos e camisa de couro preta, sem barba e com o fundo em gradiente roxo e azul"
    )
    //se tiver sem light mode, manter a imagem e texto normais
  } else {
    img.setAttribute("src", "/Assets/assets/foto_1.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e com o fundo amarelo"
    )
  }
}
