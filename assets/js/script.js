var nav = document.querySelector('nav')
var sidebar = document.querySelector('#sidebar')
var toggleMenu = document.querySelector('#toggle-menu')
var btnOpen = document.querySelector('#btn-open')
var btnClose = document.querySelector('#btn-close')


toggleMenu.addEventListener('click',function(){
    sidebar.classList.toggle('hidden')
    sidebar.dataset.toggle = sidebar.dataset.toggle === 'open' ? 'close' : 'open'
    if(sidebar.dataset.toggle === 'open'){
        btnOpen.classList.add('hidden')
        btnClose.classList.remove('hidden')
    }else{
        btnOpen.classList.remove('hidden')
        btnClose.classList.add('hidden')
    }
})

window.addEventListener('scroll',function(){
    if(this.scrollY > 130){
        nav.classList.add('shadow-md')
        nav.style.background = '#00000090' 
    }else{
        nav.classList.remove('shadow-md')
        nav.style.background = '' 
    }
    
})