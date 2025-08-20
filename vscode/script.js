function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    //substituir a imagem
    const img = document.querySelector("#profile img")

    if(html.classList.contains('light')){
        img.setAttribute('src', 'imagens/avatar-light.png')
    } else {
        img.setAttribute('src','imagens/avatar-dark.png' )
    }
}