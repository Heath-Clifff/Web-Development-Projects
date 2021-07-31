const progress = document.getElementById('progress')
const circles = document.querySelectorAll('.circle')
const leftBtn = document.getElementById('leftBtn')
const rightBtn = document.getElementById('rightBtn')

let currentActive = 1

leftBtn.addEventListener('click', () =>{
    currentActive--
    if(currentActive < 1){
        currentActive = 1
    }
    update()
})

rightBtn.addEventListener('click', () =>{
    currentActive++
    if(currentActive > circles.length){
        currentActive = circles.length
    }
    update()
})

function update() {
    const activeCircle = circles[currentActive]

    circles.forEach((circle, idx) => {
        if(currentActive > idx){
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')}
    })

    progress.style.width = ((currentActive - 1) / (circles.length - 1)) * 100 + '%'

    if(currentActive === 1){
        leftBtn.disabled = true
    } else if(currentActive === 4) {
        rightBtn.disabled = true
    } else {
        leftBtn.disabled = false
        rightBtn.disabled = false
    }
}