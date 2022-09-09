let time = 2000,
    currentImageIndex = 0,
    images = document.querySelectorAll("#slider img")
    max = images.length;

function nextImage(){
    // remove a class selected
    images[currentImageIndex].classList.remove("selected")

    // troca a posição do Array/Node List
    currentImageIndex++
    if(currentImageIndex >= max){
        currentImageIndex = 0
    }

    // adiciona a class selected
    images[currentImageIndex].classList.add("selected")
}

function start(){
    setInterval(() => {
        // troca de imagem
        nextImage()
    }, time)
}

window.addEventListener("load", start)