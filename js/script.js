// custom function
const getId = (selector) => {
    const get = document.getElementById(selector)
    return get
}

// selector
const navbar = getId('navbar')

const navbarScroll = () => {
    window.addEventListener('scroll', function() {
        if (window.scrollY) {
            console.log('halaman di scroll ke atas')
        }
        console.log(window.scrollY)
    });
}


// run after page finish the load
window.addEventListener('load', () => {
    console.log(navbar)
    navbarScroll()
    
})