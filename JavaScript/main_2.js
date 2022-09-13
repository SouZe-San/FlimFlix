
// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[ LOGIC BEHIND STOP SCROLL ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

        // if any scroll is attempted, set this to the previous value
        window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

// [[[[[[[[[[[[[[[[[[[[[[[ EPISODE START ]]]]]]]]]]]]]]]]]]]]]]]

const episods = document.querySelectorAll('.ep_items');
("ep_items");
for (let ep of episods) {
    ep.style.cursor = "pointer";
    ep.addEventListener('click', () => {
        // alert("Error! Pls,Check Your Internet Connection");
        document.getElementById("videobg").style.display = "flex";
        window.scrollTo(0, 0);
        setTimeout(disableScroll, 1000);
    })
}

// [[[[[[[[[[[[[[[[[[[[[[[[[[[ CLOSE BUTTON ]]]]]]]]]]]]]]]]]]]]]]]]]]]
const closeBtn = document.getElementById("video_close_btn");
closeBtn.addEventListener('click', () => {
    document.getElementById("videobg").style.display = "none";
    document.getElementById("videoInterface").pause();
    window.onscroll = function () { };

})


//[[[[[[[[[[[[[[[[[[[[[[[[[[ ALART FOR FAULT ERROR ]]]]]]]]]]]]]]]]]]]]]]]]]]
const movieCards = document.querySelectorAll('.sllide-card');

for (let card of movieCards) {
    card.addEventListener('click', () => {
        alert("Error! Pls,Check Your Internet Connection");
    })
}

// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[ HIDDEN NAV ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

const navButton = document.getElementById("navbtn");
const navDisplay = document.getElementById("hidden-nav");

document.getElementById("navbtn").addEventListener('click', () => {
    document.getElementById("hidden-nav").classList.toggle("release_nav");
    
    navButton.classList.toggle("scale_rotate");
})



// [[[[[[[[[[[[[[[[[[[[[[[[ SCROLL REVALLING  ]]]]]]]]]]]]]]]]]]]]]]]]

const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay:300,
    // reset:true
})

sr.reveal(`.home__header, .section`)
sr.reveal(`.float-container`, {delay: 200, origin:'top'})
sr.reveal(`.c0`,{origin:'left', interval: 100}
)
sr.reveal(`.c1`,{delay:800,origin: 'bottom', interval: 100}
)
sr.reveal(`.c2`,{delay:900, origin: 'bottom',interval: 100}
)
sr.reveal(`.c3`,{delay:1000,origin: 'bottom', interval: 100}
)
sr.reveal(`.row2_2`,{origin: 'right', interval: 100}
)
sr.reveal(`.play_icon`,{delay: 600,origin: 'bottom', interval: 500}
)
sr.reveal(`.cut`,{delay: 600,origin: 'bottom', interval: 500}
)
sr.reveal(`.soundtrack`,{delay: 500,origin: 'left', interval: 500}
)
sr.reveal(`.sllide-card`,{origin: 'left', interval: 100}
)
sr.reveal(`.underinfo`,{origin: 'buttom', interval: 100}
)

