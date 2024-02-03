let burger = document.querySelector('.burger')
let rNav = document.querySelector('.responsive-nav')
let blur = document.querySelector('.blur')

blur.addEventListener('click', function(){
    blur.style.left = '100%'
    rNav.style.left = '-100%'
})

burger.addEventListener('click', function(){
    rNav.style.left = "0"
    blur.style.left = "0"
})
