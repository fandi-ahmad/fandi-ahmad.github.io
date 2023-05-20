// custom function
const getId = (selector) => {
    const get = document.getElementById(selector)
    return get
}

// selector
const navbar = getId('navbar')

// ===== SHOW NAVBAR IN SCROLL UP =====
const navbarScroll = () => {
    let lastScrollY = window.scrollY
    window.addEventListener('scroll', () => {
        if (lastScrollY < window.scrollY) {
            // up
            navbar.style.marginTop = '-200px'
        } else if (window.scrollY <= 300) {
            // top
            navbar.style.marginTop = '-200px'
        } else {
            // down
            navbar.style.marginTop = '0px'
        }
        lastScrollY = window.scrollY;
    })
}


// run after page finish the load
window.addEventListener('load', () => {
    navbarScroll()
})