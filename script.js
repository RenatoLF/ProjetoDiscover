function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //Pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  //se tiver light mode, adicionar a imagem light
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto designada para o Light Mode")

    //se tiver sem light mode, manter a imagem normal
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto designada para quanto o Light Mode estiver desligado"
    )
  }
}

//if (html.classList.contains("light")) {
//  html.classList.remove("light")
//} else {
//  html.classList.add("light")
//}
