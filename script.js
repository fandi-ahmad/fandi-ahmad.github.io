let firstImg = document.getElementsByClassName('first-img')[0]
// let secondImg = document.getElementsByClassName('second-img')[0]
let birdImg = document.getElementsByClassName('bird-img')[0]
let focusImg = document.getElementsByClassName('focus-img')[0]
let leafImg = document.getElementsByClassName('leaf-img')[0]
let traveling = document.querySelector('.adventure-img')
let button = document.querySelector('.btn')

window.addEventListener('scroll', function () {
    let value = window.scrollY;

    birdImg.style.left = value * 0.7 + 'px'
    birdImg.style.top = value * -0.3 + 'px'
    firstImg.style.top = value * 0.7 + 'px'
    // secondImg.style.top = value * 0.3 + 'px'
    focusImg.style.top = value * 0 + 'px'
    leafImg.style.left = value * 1.5 + 'px'
    traveling.style.right = value * 0.4 + 'px'
    button.style.marginTop = value * 0.1 + 'px'
})