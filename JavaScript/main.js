// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[ GENERS BUTTTON ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
const genreBotton = document.querySelectorAll('.gener__btn');

for (let button of genreBotton) {
    if (button) {
        button.addEventListener('click', () => {
            button.classList.toggle("toggol_btn_color");
        })
    }


}
//[[[[[[[[[[[[[[[[[[[[[[[[[[ ALART FOR FAULT ERROR ]]]]]]]]]]]]]]]]]]]]]]]]]]
const movieCards = document.querySelectorAll('.sllide-card');

for (let card of movieCards) {
    card.addEventListener('click' , ()=>{
        alert("Error! Pls,Check Your Internet Connection");
    })
}

// [[[[[[[[[[[[[[[[[[[[[[[[[[[ RANGE VALUE  ]]]]]]]]]]]]]]]]]]]]]]]]]]]

let input = document.getElementById("range__input")
let output = document.getElementById("range__output")
output.innerHTML = input.value;
input.oninput = function () {
    output.innerHTML = this.value;
}

//[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[ POP-UP SCROLL BOX ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

function scrollUp() {
    const scrollUp = document.getElementById('scroll-pop');
    if (this.scrollY >= 400) scrollUp.style.bottom = "3rem";
    else scrollUp.style.bottom = "-5rem";
}
window.addEventListener('scroll', scrollUp);


// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[ BG-CHANGE OF NAVIGATON-BAR DURING SCROLL ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

function navBg() {
    const navBg = document.getElementById('Top_nav_bar')
    if (this.scrollY >= 100) {
        // navBg.style.backgroundColor = "#817979a6";
        // navBg.style.backgroundColor = "#373434a6";
        navBg.style.backgroundColor = "#454141c3";
        navBg.style.backdropFilter = "blur(5px)"
    }
    else {
        navBg.style.backgroundColor = "transparent";
        navBg.style.backdropFilter = "none"
    }
}
window.addEventListener('scroll', navBg);


// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[ POSTER-SLIDE CHANGES ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

let slideIndx = 1;
showSlides(slideIndx)

function forwardSlide(n) {
    showSlides(slideIndx += n);
}

function currentSlide(n) {
    showSlides(slideIndx = n);
}

function showSlides(n) {
    const slide = document.getElementsByClassName("my_poster");
    const slideNotetion = document.getElementsByClassName("s1");

    if (n > slide.length) {
        slideIndx = 1
    }

    if (n < 1) {
        slideIndx = slide.length
    }

    for (let i = 0; i < slide.length; i++) {          //------------->  slide gulo k Alwayas invisibel kore rathar jonno
        slide[i].style.display = "none";
    }
    slide[slideIndx - 1].style.display = "block";


    for (let i = 0; i < slideNotetion.length; i++) {
        slideNotetion[i].className = slideNotetion[1].className.replace("active__slide", " ");  //-----> Alwayas active__slide class name take delet korar jonoo
    }
    slideNotetion[slideIndx - 1].className += "active__slide";       //--------> Ata only for add this classname

}


//[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[ FOR SCROLLIN BY BUTTON IN A ROW ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

const container = document.querySelectorAll('.movie__slides');
const nextBtn = document.getElementById('right')
const previousBtn = document.getElementById('left');

container.forEach((card) => {
    let containerDimensions = card.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nextBtn.addEventListener('click', () => {
        card.scrollLeft += containerWidth - 600;
    })

    previousBtn.addEventListener('click', () => {
        card.scrollLeft -= containerWidth - 600;
    })
})

//   [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[ SECTION CHANGE FOR CHOISE ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

// ((((((((((((((((((((((((((((((((( TRANDS SECTION )))))))))))))))))))))))))))))))))

const slideSection = document.getElementsByClassName('option-section');
const trandsBotton = document.getElementById('trands__btn')
const popularBotton = document.getElementById('popular__btn');
const primeBotton = document.getElementById('prime__btn')
const topRankBotton = document.getElementById('TopRanks__btn')
const sectionBotton = document.getElementsByClassName('option-btn')

for (let i = 0; i < slideSection.length; i++) {
    slideSection[i].style.display = "none";
    sectionBotton[i].className = sectionBotton[1].className.replace("active-section", " ");
}

if (true) {
    slideSection[0].style.display = " -webkit-box";
    sectionBotton[0].className += " active-section";
}

trandsBotton.addEventListener('click', () => {
    slideSection[0].style.display = " -webkit-box";
    sectionBotton[0].className += " active-section";

    for (let i = 0; i < slideSection.length; i++) {
        if (i == 0) {
            continue;
        }
        slideSection[i].style.display = "none";
        sectionBotton[i].className = sectionBotton[1].className.replace("active-section", " ");
    }
})
popularBotton.addEventListener('click', () => {
    slideSection[1].style.display = "-webkit-box";
    sectionBotton[1].className += " active-section";

    for (let i = 0; i < slideSection.length; i++) {
        if (i == 1) {
            continue;
        }
        slideSection[i].style.display = "none";
        sectionBotton[i].className = sectionBotton[1].className.replace("active-section", " ");
    }
})
primeBotton.addEventListener('click', () => {
    slideSection[2].style.display = "-webkit-box";
    sectionBotton[2].className += " active-section";

    for (let i = 0; i < slideSection.length; i++) {
        if (i == 2) {
            continue;
        }
        slideSection[i].style.display = "none";
        sectionBotton[i].className = sectionBotton[1].className.replace("active-section", " ");
    }
})
topRankBotton.addEventListener('click', () => {
    slideSection[3].style.display = "-webkit-box";
    sectionBotton[3].className += " active-section";

    for (let i = 0; i < slideSection.length; i++) {
        if (i == 3) {
            continue;
        }
        slideSection[i].style.display = "none";
        sectionBotton[i].className = sectionBotton[1].className.replace("active-section", " ");
    }
})

// ((((((((((((((((((((((((((((((((((((((( MOVIE SECTION )))))))))))))))))))))))))))))))))))))))

const sectors = document.getElementsByClassName('Movie__recomanded');
const movieBotton = document.getElementById('movie__btn')
const webSeriesBotton = document.getElementById('webseries__btn');
const animeBotton = document.getElementById('anime__btn')
const hoichoiBotton = document.getElementById('hoichoi__btn')
const sectorBotton = document.getElementsByClassName('sector_btn')


for (let i = 0; i < sectors.length; i++) {
    sectors[i].style.display = "none";
    sectorBotton[i].className = sectorBotton[1].className.replace("active-section", " ");
}

if (true) {
    sectors[0].style.display = " -webkit-box";
    sectorBotton[0].className += " active-section";
}

movieBotton.addEventListener('click', () => {
    sectors[0].style.display = " -webkit-box";
    sectorBotton[0].className += " active-section";

    for (let i = 0; i < sectors.length; i++) {
        if (i == 0) {
            continue;
        }
        sectors[i].style.display = "none";
        sectorBotton[i].className = sectorBotton[1].className.replace("active-section", " ");
    }

})
webSeriesBotton.addEventListener('click', () => {
    sectors[1].style.display = "-webkit-box";
    sectorBotton[1].className += " active-section";

    for (let i = 0; i < sectors.length; i++) {
        if (i == 1) {
            continue;
        }
        sectors[i].style.display = "none";
        sectorBotton[i].className = sectorBotton[1].className.replace("active-section", " ");
    }
})
animeBotton.addEventListener('click', () => {
    sectors[2].style.display = "-webkit-box";
    sectorBotton[2].className += " active-section";

    for (let i = 0; i < sectors.length; i++) {
        if (i == 2) {
            continue;
        }
        sectors[i].style.display = "none";
        sectorBotton[i].className = sectorBotton[1].className.replace("active-section", " ");
    }
})
hoichoiBotton.addEventListener('click', () => {
    sectors[3].style.display = "-webkit-box";
    sectorBotton[3].className += " active-section";

    for (let i = 0; i < sectors.length; i++) {
        if (i == 3) {
            continue;
        }
        sectors[i].style.display = "none";
        sectorBotton[i].className = sectorBotton[1].className.replace("active-section", " ");
    }
})

// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[ DROPDOWN -LIST ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]


// const dropdownBtn = document.getElementById("dropdown-btn");
// dropdownBtn.addEventListener('click', () =>{
//     dropContaint.classList.toggle('dropdown')
// })
const dropdownBtn = document.getElementById("dropdown-btn");
const dropContaint = document.getElementById("list_containt");
dropdownBtn.addEventListener('mouseover', () => {
    dropContaint.style.display = "block"
})
dropdownBtn.addEventListener('mousedown', () => {
    dropContaint.style.display = "none"
})

// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[ TAB/MOBAILE - NAV_BARAPPEARNCE ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

// Fully Fuctional hideen Nav'------------

function myFunction(x) {
    if (x.matches) {
        hiddenNav.style.width = "0vw";
        hiddenNav.style.visibility = "hidden"
        navOpen.addEventListener("mouseover", () => {

            // hiddenNav.style. backgroundImage="linear-gradient(to bottom left,black,white)";
            hiddenNav.style.backgroundImage = " linear-gradient(to right top, rgb(0, 0, 1),rgb(86, 32, 151), #00dbff)";
            // hiddenNav.style.background="#f91858";
            hiddenNav.style.right = "0";
            hiddenNav.style.top = "0";
            hiddenNav.style.height = "36vw";
            hiddenNav.style.width = "30vw";
            hiddenNav.style.visibility = "visible"
            navOpen.style.rotate = "765deg"

        })
        navOpen.addEventListener("mousedown", () => {

            hiddenNav.style.background = "none";
            hiddenNav.style.right = "27px";
            hiddenNav.style.top = "20px";
            hiddenNav.style.height = "0vw";
            hiddenNav.style.width = "0vw";
            hiddenNav.style.visibility = "hidden"
            navOpen.style.rotate = "0deg"
        })
    } else {
        hiddenNav.style.width = "auto";
        hiddenNav.style.visibility = "visible"
    }
}

// // Create a MediaQueryList object-----
const mmObj = window.matchMedia("(max-width: 865px)")

// // Call the match function at run time:---------
myFunction(mmObj);

// // Add the match function as a listener for state changes:-----------
mmObj.addListener(myFunction)


// [[[[[[[[[[[[[[[[[[[[[[[[ TRAILER PALY ]]]]]]]]]]]]]]]]]]]]]]]]

// const videobox = document.getElementById("myVideo");
// // const switchBox = document.getElementById("switch");
// function playVid() { 
//     videobox.play(); 
//   } 
  
//   function pauseVid() { 
//     videobox.pause(); 
//   } 



  
// [[[[[[[[[[[[[[[[[[[[[[[[ SCROLL REVALLING  ]]]]]]]]]]]]]]]]]]]]]]]]

const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay:300,
    // reset:true
})

sr.reveal(`.imgleft`, { origin:'buttom', interval:100})
sr.reveal(`.imgright`,{origin:'top', interval: 100}
)
sr.reveal(`.column`,{origin:'left', interval: 100}
)
sr.reveal(`.site_info`,{delay:800,origin: 'bottom', interval: 100}
)

sr.reveal(`.row3`,{origin:'right', interval: 100}
)
sr.reveal(`.row1,.row2`,{origin:'buttom', interval: 50}
)
sr.reveal(`.join__btn`,{origin:'buttom', interval: 100}
)