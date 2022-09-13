const lang = document.querySelector('.lang')
const menu = document.querySelector('.lang-menu')

lang.addEventListener('click' , ()=>{
    menu.classList.toggle('drop')
})

const input = document.querySelectorAll('.input')

input.forEach(btn=>{
    btn.addEventListener('focus' , ()=>{
        btn.classList.add('active')
    })

    btn.addEventListener('blur' , ()=>{

        if(btn.value === ''){

            btn.classList.remove('active')
        }
    })
})

// [[[[[[[[[[[[[[[[[[[[[[[[[ Hidden password ]]]]]]]]]]]]]]]]]]]]]]]]]
const toggleIcon = document.querySelector('.icons')
const passInput = document.querySelector('.pass')


toggleIcon.addEventListener('click' ,()=>{
    if(passInput.type === 'password'){
        passInput.type = 'text'
    }else{
        passInput.type = 'password'
    }
    toggleIcon.classList.toggle('active')
})


gsap.from(".box, .inner-box, .column-1, .column-2, .login ,.icons,.input-field,.inputs,.btns,.lang,.lang-menu",{
    y: 500,
    ease: Power1.easeOut,
    // skewX: 10,
    opacity:0,
    scale:1.3,
    stagger:{
        amount:0.5
    },
    duration:0.9

})