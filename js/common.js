/*cursor custom*/
let cursor = document.querySelector(".cursor");
let cursorScale = document.querySelectorAll(".cursor-scale"); 
let mouseX = 0;
let mouseY = 0;


gsap.to({}, 0.016, {
    repeat: -1,
    onRepeat: function(){
        gsap.set(cursor, {
        css: {
            left: mouseX,
            top: mouseY,
        }
        })
    }
});

window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

cursorScale.forEach(link => {
    link.addEventListener("mousemove", () => {
        cursor.classList.add("grow"); 
        if (link.classList.contains("small")){
        cursor.classList.remove("grow");
        cursor.classList.add("grow-small");
        }
    });

    link.addEventListener("mouseleave", () => {
        cursor.classList.remove("grow");
        cursor.classList.remove("grow-small");
    });
});

/*header*/
$(window).on("scroll", function(){
    if($(window).scrollTop() >= 72) {
        $("header").addClass("fixed");
    } else {
        $("header").removeClass("fixed");
    }
});

/*hamburger menu*/
$("header .hbg").on("click", function(){
    $(this).toggleClass("active");
    $(this).toggleClass("close");

    if($("header .hbg").hasClass("active") == true) {
        $("nav").addClass("active");
        $("nav").removeClass("close");
        $("html, body").css("overflow-y" , "hidden");
    } else {
        $("nav").removeClass("active");
        $("nav").addClass("close");
        $("html, body").css("overflow-y" , "initial");
    }
});
$("nav > ul > li > a").on("click", function(){
    $("header .hbg").removeClass("active");
    $("nav").removeClass("active");
    $("nav").addClass("close");
    $("html, body").css("overflow-y" , "initial");
});

/*music play button*/
let music = document.querySelector(".music");
$(".mute-btn").on("click", function(){
    $(this).toggleClass("play");

    if($(".mute-btn").hasClass("play") == true) {
        music.play();
        music.volume = 0.3;
        $(this).addClass("play");

    } else {
        music.pause();
        $(this).removeClass("play");
    }
});

/*page01 text marquee effect*/
const mText01 = document.querySelector(".marquee-text01");
const mText02 = document.querySelector(".marquee-text02");

const textArray1 = 'ARTISTIC. TRENDY. MULTIFARIOUS-IDEAS. STUDYING.'.split(' ');
const textArray2 = 'COOPERATIVE. FRIENDLY. OPEN-EARED. DIVERSE-EXPERIENCES.'.split(' ');

let count1 = 0;
let count2 = 0;

initTexts(mText01, textArray1);
initTexts(mText02, textArray2);

function initTexts(element, textArray) {
    textArray.push(...textArray);
    for (let i = 0; i < textArray.length; i++) {
        element.innerHTML += `<span>${textArray[i]}</span>`;
    }
}

function marqueeText(count, element, direction) {
    if (count > element.scrollWidth / 2) {
        element.style.transform = `translateX(0)`;
        count = 0;
    }
    element.style.transform = `translateX(${direction * count}px)`;
    return count;
};

function marqueeAnimate() {
    count1++;
    count2++;
    
    count1 = marqueeText(count1, mText01, -1);
    count2 = marqueeText(count2, mText02, 1);

    window.requestAnimationFrame(marqueeAnimate);
};

function scrollHandler() {
    count1 += 15;
    count2 += 15;
}

window.addEventListener("scroll", scrollHandler);

marqueeAnimate();

/*page scroll effect*/
var section = document.querySelector(".main");
var tl = gsap.timeline({
    trigger: ".main",

});

gsap.registerPlugin(ScrollTrigger);
const select = (e) => document.querySelector(e);

function initLoader() { 
    const loader = gsap.timeline({ defaults: { duration: 1 },
        onComplete: () => {
            select("body").classList.remove("is-loading");
            initMain();
        }
    });

    const loaderOut = gsap.timeline({ defaults: { duration: 1, delay: 4.5 } });

    loaderOut.to(".loading", { autoAlpha: 0, display:"none" }, 0)
    .from(".main", { autoAlpha: 0 }, 0);

    const master = gsap.timeline();
    master.add(loader).add(loaderOut);
}

function initMain() { 

    ScrollTrigger.matchMedia({
        "(max-width: 800px)" : function() {
            gsap.from(".page02 .text", {
                opacity: 0,
                y: 100,
                scrollTrigger: {
                    trigger: ".page02 .text",
                    scrub: true,
                    start: "center bottom",
                    end: "center center",
                },
                duration: 0.5,
                ease: "power1",
            });
        },

        "(min-width : 801px)" : function() {
            gsap.from(".page02 .text", {
                opacity: 0,
                x: 200,
                scrollTrigger: {
                    trigger: ".page02 .text",
                    scrub: true,
                    start: "center bottom",
                    end: "center center",
                },
                duration: 0.5,
                ease: "power1",
            });
        },

        "all": function() {
            gsap.from(".page02 .profile-img", {
                opacity: 0,
                translateY: 200,
                scrollTrigger: {
                    trigger: ".page02 .profile-img",
                    scrub: true,
                    start: "top bottom",
                    end: "center center",
                },
                duration: 0.5,
                ease: "power1.inOut"
            });

            gsap.from(".page02 .text-box", {
                opacity: 0,
                y: 100,
                scrollTrigger: {
                    trigger: ".page02 .text-box",
                    scrub: true,
                    start: "top bottom",
                    end: "bottom bottom"
                },
                duration: 0.5,
                ease: "power1.inOut"
            });

            gsap.from(".page03 .skill-wrap", {
                scrollTrigger: {
                    trigger: ".page03 .skill-wrap",
                    scrub: true,
                    start: "top center",
                    end: "bottom top",
                    toggleClass: "active",
                },
            });

            gsap.from(".page05", {
                scrollTrigger: {
                    trigger: ".page05",
                    scrub: true,
                    start: "top center",
                    end: "bottom top",
                    toggleClass: "active",
                },
            });
        }
    });
}

function init() { 
    initLoader();
}

window.addEventListener("load", function(){ 
    init();
});

/*page02 resume-btn effect*/
const mouseImg = document.querySelector(".resume-btn");
const imageWrap = document.querySelector(".profile-img-sub");

const onMouseEnter = () => {
    gsap.set(imageWrap, {xPercent: -50, yPercent: 50, rotation: -15, scale: 0.3, opacity:0});
    gsap.to(imageWrap, {xPercent: -50, yPercent: -50, rotation: 0, scale: 1, opacity:1});
};
const onMouseLeave = () => {
    gsap.to(imageWrap, {xPercent: -50, yPercent:-100, rotation: 15, scale:0.3, opacity:0})
}
const onMouseMove = ({x, y}) => {
    gsap.to(imageWrap, {
        duration: 1.25,
        x: (mouseX - window.innerWidth / 2) / 10,
        y: (mouseY - window.innerWidth / 2) / 10,
    })
}
mouseImg.addEventListener("mouseenter", onMouseEnter);
mouseImg.addEventListener("mouseleave", onMouseLeave);
mouseImg.addEventListener("mousemove", onMouseMove);


/*page04 swiper*/
var swiperBg = document.querySelector(".bg-swiper");

const swiperSlideEvent = (Swiper) => {
    if (Swiper.realIndex === 0) {
        swiperBg.style.backgroundImage = "url('./img/project-bg-img01.png')";
        swiperBg.animate([ {opacity: "0"}, {opacity: "0.5"}], 500)
    } else if (Swiper.realIndex === 1) {
        swiperBg.style.backgroundImage = "url('./img/project-bg-img02.png')";
        swiperBg.animate([ {opacity: "0"}, {opacity: "0.5"}], 500)
    } else if (Swiper.realIndex === 2) {
        swiperBg.style.backgroundImage = "url('./img/project-bg-img03.png')";
        swiperBg.animate([ {opacity: "0"}, {opacity: "0.5"}], 500)
    } else if (Swiper.realIndex === 3) {
        swiperBg.style.backgroundImage = "url('./img/project-bg-img04.png')";
        swiperBg.animate([ {opacity: "0"}, {opacity: "0.5"}], 500)
    } else if (Swiper.realIndex === 4) {
        swiperBg.style.backgroundImage = "url('./img/project-bg-img05.png')";
        swiperBg.animate([ {opacity: "0"}, {opacity: "0.5"}], 500)
    } else if (Swiper.realIndex === 5) {
        swiperBg.style.backgroundImage = "url('./img/project-bg-img07.jpg')";
        swiperBg.animate([ {opacity: "0"}, {opacity: "0.5"}], 500)
    } else {
        swiperBg.style.backgroundImage = "url('./img/project-bg-img06.png')";
        swiperBg.animate([ {opacity: "0"}, {opacity: "0.5"}], 500)
    }
};

var pjSwiper = new Swiper(".project-swiper", {
    spaceBetween: 200,
    touchRatio: 0.3,
    loop:"true",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    breakpoints: {
        100: {
            slidesPerView: 1.5,
            spaceBetween: 10,
        },
        460: {
            slidesPerView: 2,
            spaceBetween: 150,
        },
        900: {
            slidesPerView: 2.3,
            spaceBetween: 150,
        },
        1000: {
            slidesPerView: 2.5,
            spaceBetween: 150,
        },
    },
});

pjSwiper.on("slideChange", swiperSlideEvent);

/*page05 contact button effect*/
let contactBtn = document.querySelector(".contact-btn");
let contactLink = document.querySelector(".contact-link");

function contactBtnMousemove () {
    let wWidth = window.innerWidth;
    let moveX = (mouseX - window.innerWidth / 2) / 10;
    let moveY = (mouseY - window.innerHeight / 2) / 10;
    
    if(wWidth > 1200) {
        contactLink.style.transform = `translate(${moveX}px , ${moveY}px)`;
    } else {
        contactLink.style.transform = `translate(0px , 0px)`;
    }
}

contactBtn.addEventListener("mousemove", contactBtnMousemove);

contactBtn.addEventListener("mouseenter", (e) => {
    contactLink.style.transition = `none`;
});

contactBtn.addEventListener("mouseleave", (e) => {
    contactLink.style.transition = `all .3s ease`;
    contactLink.style.transform = `translate(0px , 0px)`;
});