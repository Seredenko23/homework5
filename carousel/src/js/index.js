import './../css/style.css'

const carousel = document.getElementById('carousel')
const items = document.getElementById('items')
const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
const slides = items.getElementsByClassName('item')
const firstSlide = slides[0]
const slidesLength = slides.length
const lastSlide = slides[slidesLength - 1]
const cloneFirst = firstSlide.cloneNode(true)
const cloneLast = lastSlide.cloneNode(true)

const slideWidth = 500
const lastSlidePosition = slidesLength * slideWidth
let currentSlide = -500
let slideIndex = 0
let allowShifting = true
const shift = 100
let initPos
let finPos
let coordX1 = 0
let coordX2 = 0

items.appendChild(cloneFirst)
items.insertBefore(cloneLast, firstSlide)

items.style.left = '-500px'

items.onmousedown = dragStart

items.addEventListener('touchstart', dragStart)
items.addEventListener('touchend', dragEnd)
items.addEventListener('touchmove', draging)

prev.addEventListener('click', () => { changeSlide(-1) })
next.addEventListener('click', () => { changeSlide(1) })

items.addEventListener('transitionend', checkSlide)

function dragStart (event = window.event) {
  event.preventDefault()
  initPos = items.offsetLeft
  if (event.type == 'touchstart') {
    coordX1 = event.touches[0].clientX
  } else {
    coordX1 = event.clientX
    document.onmousemove = draging
    document.onmouseup = dragEnd
  }
}

function draging (event) {
  if (event.type == 'touchmove') {
    coordX2 = coordX1 - event.touches[0].clientX
    coordX1 = event.touches[0].clientX
  } else {
    coordX2 = coordX1 - event.clientX
    coordX1 = event.clientX
  }
  const shifting = items.offsetLeft - coordX2
  items.style.left = `${shifting}px`
}

function dragEnd (event) {
  finPos = items.offsetLeft
  if (finPos - initPos < -shift) {
    changeSlide(1, true)
  } else if (finPos - initPos > shift) {
    changeSlide(-1, true)
  } else {
    items.style.left = `${initPos}px`
  }
  document.onmouseup = null
  document.onmousemove = null
}

function changeSlide (dir, draging = false) {
  if (allowShifting) {
    if (draging) initPos = items.offsetLeft
    items.classList.add('shifting')
    currentSlide = currentSlide - slideWidth * dir
    items.style.left = `${currentSlide}px`
    slideIndex += dir
  }
  allowShifting = false
}

function checkSlide () {
  items.classList.remove('shifting')

  if (slideIndex === slidesLength) {
    items.style.left = '-500px'
    currentSlide = -500
    slideIndex = 0
  } else if (slideIndex === -1) {
    items.style.left = `-${lastSlidePosition}px`
    currentSlide = Number.parseInt(items.style.left)
    slideIndex = slidesLength - 1
  }
  allowShifting = true
}
