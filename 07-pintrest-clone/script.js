const grids = document.querySelectorAll('.grid')
const headings = document.querySelectorAll('.heading .wrapper .text')

function enterScreen(index) {
    const grid = grids[index]
    const heading = headings[index]
    const gridColumns = grid.querySelectorAll('.column')
    const gridItems = grid.querySelectorAll(".item")

    grid.classList.add('active')

    gridColumns.forEach(element => {
        element.classList.remove('animate-before', 'animate-after')
    })

    gridItems.forEach(element => {
        const randomImg = `<img src='https://source.unsplash.com/236x350/?${Math.floor(Math.random() * 35 * 5)}'>`
        element.innerHTML = randomImg        
    })

    heading.classList.remove('animate-before', 'animate-after')
}

function exitScreen(index, exitDelay) {
    const grid = grids[index]
    const heading = headings[index]
    const gridColumns = grid.querySelectorAll('.column')

    gridColumns.forEach(element => {
        element.classList.add('animate-after')
    })

    heading.classList.add('animate-after')

    setTimeout(() => {
        grid.classList.remove('active')
    }, exitDelay)
}

function setupAnimationCycle({ timePerScreen, exitDelay }) {
    const cycleTime = timePerScreen + exitDelay;
    let nextIndex = 0

    function nextCycle() {
        const currentIndex = nextIndex

        enterScreen(currentIndex)

        setTimeout(() => exitScreen(currentIndex, exitDelay), timePerScreen)

        // 0, 1, 2, 3 - 4 telas para mostrar
        nextIndex = nextIndex >= grids.length - 1 ? 0 : nextIndex + 1
    }

    nextCycle()

    setInterval(nextCycle, cycleTime)
}

setupAnimationCycle({
    initialScreenIndex: 0,
    timePerScreen: 5000, // ms
    exitDelay: 200 * 7, // ms
})

