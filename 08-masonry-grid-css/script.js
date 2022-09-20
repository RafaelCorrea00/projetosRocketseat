const img = document.querySelectorAll("img")
const modalTitle = document.querySelector("#modalTitle")
const modalImg = document.querySelector("#modalImg")

img.forEach((element) => {
    element.addEventListener('click', () => {
        const title = element.getAttribute("alt")
        const image = element.getAttribute("src")

        modalTitle.innerHTML = title
        modalImg.setAttribute('src', image)
    })
})

