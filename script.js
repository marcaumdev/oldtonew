window.onload=function(){
    var body = document.getElementById("body")
    var header = document.getElementById("header")
    var nav = document.getElementById("nav")
    var section = document.getElementById("section")
    var h1 = document.getElementById("h1")
    var imagens = document.getElementById("imagens")
    var img1 = document.getElementById("artista1")
    var img2 = document.getElementById("artista2")
    var img3 = document.getElementById("artista3")
    var img4 = document.getElementById("artista4")
    var botao = document.getElementById("button")
    var footer = document.getElementById("footer")
    var textoFooter = document.getElementById("texto-footer")
    var link = document.getElementsByClassName("link")
    var textoImagem = document.getElementsByClassName("texto-imagem")

    botao.addEventListener("click", ()=>{
        body.classList.remove("body-velho");
        body.classList.add("body-novo");
        header.classList.remove("header-velho");
        header.classList.add("header-novo");
        nav.classList.remove("nav-velho");
        nav.classList.add("nav-novo");
        section.classList.remove("section-velho");
        section.classList.add("section-novo");
        h1.classList.remove("h1-velho");
        h1.classList.add("h1-novo");
        imagens.classList.remove("artistas-velho");
        imagens.classList.add("artistas-novo");
        botao.classList.remove("botao-velho");
        botao.classList.add("botao-novo");
        footer.classList.remove("footer-velho");
        footer.classList.add("footer-novo");

        img1.setAttribute("src", "img/ga.jpg")
        img2.setAttribute("src", "img/kyan.jpg")
        img3.setAttribute("src", "img/aka-rasta.jpg")
        img4.setAttribute("src", "img/rudies-flacko.jpg")

        link[0].innerHTML = "G.A"
        link[1].innerHTML = "Kyan"
        link[2].innerHTML = "Aka Rasta"
        link[3].innerHTML = "Rudies Flacko"

        link[0].setAttribute("href", "https://www.youtube.com/watch?v=FuVAbwMGqiI")
        link[1].setAttribute("href", "https://www.youtube.com/watch?v=7mj2racNMsc")
        link[2].setAttribute("href", "https://www.youtube.com/watch?v=wjxQ2uDIvac")
        link[3].setAttribute("href", "https://www.youtube.com/watch?v=4hXzeXTfm4k")

        textoImagem[0].innerHTML = "G.A"
        textoImagem[1].innerHTML = "Kyan"
        textoImagem[2].innerHTML = "Aka Rasta"
        textoImagem[3].innerHTML = "Rudies Flacko"
        
        textoFooter.innerHTML = "direitos reservados ao futuro ©️"

        botao.innerHTML = "Volte ao passado"
        botao.addEventListener("click", ()=>{
            window.location.reload()
        });
      });
}
