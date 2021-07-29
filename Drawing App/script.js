const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const decrease = document.getElementById('decrease')
const increase = document.getElementById('increase')
const sizeIs = document.getElementById('size')
const colorEl = document.getElementById('color')
const clear = document.getElementById('clear')

let isPressed = false
let size = 20
let color = 'black'
let x
let y

canvas.addEventListener('mousedown', (e) =>{
    isPressed = true

    x = e.offsetX
    y = e.offsetY

    console.log(isPressed, x, y)
})


canvas.addEventListener('mouseup', () =>{
    isPressed = false

    x = undefined
    y = undefined

    console.log(isPressed, x, y)
})


canvas.addEventListener('mousemove', (e) =>{
    if(isPressed){
        x2 = e.offsetX
        y2 = e.offsetY
    }

    createCircle(x2, y2)
    createLine(x, y, x2, y2)

    x = x2
    y = y2

})

function createCircle(x, y){
    ctx.beginPath()
    ctx.arc(x, y, size, 0, 2 * Math.PI)
    ctx.fillStyle = color
    ctx.fill()
}

function createLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = 2 * size
    ctx.stroke()
}


decrease.addEventListener('click', () =>{
    size -= 5

    if(size < 5){
        size = 5
        
    }

    updateSize()
})


increase.addEventListener('click', () =>{
    size += 5
    
    if(size > 50){
        size = 50
    }

    updateSize()
})


function updateSize() {
    sizeIs.innerText = size
}


colorEl.addEventListener('change', (e) => color = e.target.value)

clear.addEventListener('click', () =>{
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})