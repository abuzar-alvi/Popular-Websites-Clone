var tl = gsap.timeline();



function loader(){

    document.addEventListener("readystatechange",function(){
        function scrollbarhide(){
            document.body.style.overflow = 'hidden';
        }
        scrollbarhide();
    
    
        function disableScroll() {
        // Get the current page scroll position
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      
            // if any scroll is attempted, set this to the previous value
            window.onscroll = function() {
                window.scrollTo(scrollLeft, scrollTop);
            };
        }
    disableScroll();
        if(document.readyState === "complete"){
            document.querySelector("#fs").style.transform = "translateY(-100%)"
            setTimeout(loaderHide,300);
            function loaderHide(){ 
                document.querySelector("#fs").style.opacity = "0"
            }


            function scrollbarvisible(){
                document.body.style.overflow = 'visible';
            }
            scrollbarvisible();
    
            function enableScroll() {
                window.onscroll = function() {};
            }
            enableScroll();
        }
        
    })
}
loader();

function videomove() {

    const video = document.querySelector("#video");
    const vid = document.querySelector('#mainvideo')
    const page3 = document.querySelector("#page3");
    video.addEventListener("mousemove", function (dets) {

        video.style.left = `${dets.x * 0.1}px`;
        video.style.top = `${dets.y * 0.1}px`;
        // link.style.transform = `translate(${dets.x}px, ${dets.y}px)`;

    })
}
videomove();

function cursor() {
    const cursor = document.querySelector("#cursor");
    window.addEventListener("mousemove", function (dets) {
        cursor.style.left = `${dets.x}px`;
        cursor.style.top = `${dets.y}px`;

    })

};
cursor();

function navmove() {
    const links = document.querySelectorAll(".magnet");
    const animateLink = function (e) {
        const link = this.querySelector("span");
        const { offsetX: x, offsetY: y } = e
        const { offsetWidth: width, offsetHeight: height } = this;

        intensity = 0.1; // mouse attraction force
        xMove = x / width * (intensity * 2) - intensity;
        yMove = y / height * (intensity * 2) - intensity;
        link.style.transform = `translate(${xMove}px, ${yMove}px)`;

        if (e.type === 'mouseleave') link.style.transform = '';
    };

    links.forEach(link => {
        link.addEventListener('mousemove', animateLink);
        link.addEventListener('mouseleave', animateLink);
    });
}
navmove();
tl
    .to("#icon", {
        scrollTrigger: {
            trigger: "#page1",
            // scroller:"#page1",
            // markers: true,
            start: "top 0%",
            scrub: 1,
        },

        duration: 1,
        y: -250,
        scaleY: 1.08

    })
    .to("#page3 #mainvideo", {
        scrollTrigger: {
            trigger: "#page3",
            // markers: true,
            start: "top 100%",
            scrub: 1,
        },

        duration: 1,
        y: -400,
        // scaleY:1.12

    })
function navbar() {
    document.querySelectorAll("#navbar .logo span").forEach(function (elem) {
        var clutter = "";

        elem.textContent.split("").forEach(function (elem) {
            clutter += `<span>${elem}</span>`
        })

        elem.innerHTML = clutter;
    })
    document.querySelectorAll("#navbar .logo").forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            document.querySelectorAll("#navbar span").forEach(function (harh1) {
                gsap.to(harh1.children, {
                    stagger: 0.05,
                    y: -33,
                    ease: Circ.easeInOut
                })
            })
        })
        elem.addEventListener("mouseleave", function () {
            document.querySelectorAll("#navbar span").forEach(function (harh1) {
                gsap.to(harh1.children, {
                    stagger: -0.05,
                    y: 20,
                    ease: Expo.easeInOut
                })
            })
        })
    })


}
navbar();

function page2Image() {
    var arr1 = ["https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3dbf17f2d6b85_Hero-Gif-22-p-800.jpeg", "https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db1d1d2d6ba2_Hero-Gif-36.jpg", "https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db13a32d6b88_Hero-Gif-33-p-1080.jpeg", "https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db55242d6b77_Hero-Gif-23-p-1080.jpeg", "https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db01f32d6b72_Hero-Gif-29.jpg", "https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db7a832d6b86_Hero-Gif-20-p-1080.jpeg"];
    var arr2 = ["https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db27062d6ba4_Hero-Gif-38-p-500.jpeg", "https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db52a22d6b6e_Hero-Gif-15-p-1080.jpeg", "https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db22722d6b81_Hero-Gif-24-p-1080.jpeg", "https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3dbbff42d6ba5_Hero-Gif-39.jpg", "https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db2bd12d6b83_Hero-Gif-25.jpg", "https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db779a2d6b71_Hero-Gif-10-p-1080.jpeg"];
    var arr3 = ["https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db9eec2d6b7f_Hero-Gif-5.jpg", "https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db65f72d6b82_Hero-Gif-26-p-1080.jpeg", "https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db662c2d6b74_Hero-Gif-31.jpg", "https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3dbbc112d6ba0_Hero-Gif-34-p-500.jpeg", "https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db5b892d6b6a_Hero-Gif-6.jpg", "https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db75e82d6b7d_Hero-Gif-17-p-800.jpeg"];
    var arr4 = ["https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3dbcbcd2d6b7a_Hero-Gif-21-p-1080.jpeg", "https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3dbdfe62d6b76_Hero-Gif-8-p-500.jpeg", "https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3dbf6432d6b75_Hero-Gif-9-p-800.jpeg", "https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db37082d6ba3_Hero-Gif-37.jpg", "https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db65ff2d6b8e_WILBURTON-EXTERIOR-FINAL-p-500.jpeg", "https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db120a2d6b7e_Hero-Gif-16-p-800.jpeg"];



    setInterval(function () {
        document.querySelector("#page2 #img1").src = arr1[Math.floor(Math.random() * 6)]
    }, 1000)



    setInterval(function () {
        document.querySelector("#page2 #img2").src = arr2[Math.floor(Math.random() * 6)]
    }, 2000)



    setInterval(function () {
        document.querySelector("#page2 #img3").src = arr3[Math.floor(Math.random() * 6)]
    }, 3000)



    setInterval(function () {
        document.querySelector("#page2 #img4").src = arr4[Math.floor(Math.random() * 6)]
    }, 4000)

}
page2Image();

function bubble() {
    gsap.to("#top-wrap-bubble", {
        scrollTrigger: {
            trigger: "#top-wrap-bubble",
            // markers: true,
            start: "+=20% 90%",
            end: "+=20% 50%",
            scrub: 1,
        },
        transform: "translate3d(0px, -40vw, 0px) scale3d(1, 1, 1) scale(1.2)",
        borderTopRightRadius: "20%",
        borderTopLeftRadius: "20%",
        ease: Circ.easeIn,
        duration: 1,
    })
}
bubble();


function textAnim1() {

    tl.from("#page1 h1", {
        opacity: 0,
        y: "30px",
        z: "-50px",
        rotateX: "-92deg",
        skewX: "-5deg",
        skewY: "-10deg",
        ease: Expo.ease,
        duration: 0.9
    })
    tl.from("#page1 p", {
        opacity: 0,
        y: 10
    }, "-=1")
}
textAnim1();

function allTextAnim() {
    document.querySelectorAll(".section h1").forEach(function (elem) {
        gsap.from(elem, {
            scrollTrigger: {
                trigger: elem,
                start: "top 90%"
            },
            opacity: 0,
            y: "50px",
            z: "-90px",
            rotateX: "-90deg",
            skewX: "40deg",
            skewY: "-8deg",
            ease: Circ.ease,
            duration: 1
        })
    })

    gsap.from("#we", {
        scrollTrigger: {
            trigger: "#we",
            start: "top 80%",
            scrub: 1
        },
        x: 100
    })
    gsap.from("#help", {
        scrollTrigger: {
            trigger: "#we",
            start: "top 80%",
            scrub: 1
        },
        x: -100
    })
    gsap.from("#stand", {
        scrollTrigger: {
            trigger: "#we",
            start: "top 80%",
            scrub: 1
        },
        x: 150
    })
}
allTextAnim();

function scrollCircle() {
    document.querySelectorAll(".circle").forEach(function (elem) {
        elem.addEventListener("click", function () {
            gsap.to(this, {
                rotateX: "1440deg",
                ease: Linear.EaseOut,
                duration: 2,
                // onComplete: function(){
                //     elem.style.transform = 'rotateX(0deg)'
                // }
            })
        })
        elem.addEventListener("mouseenter", function () {
            gsap.to("#cursor", {
                scale: 0.4,
                ease: Expo.ease,


            })
        })
        elem.addEventListener("mouseleave", function () {
            gsap.to("#cursor", {
                scale: 1,
                ease: Expo.ease
            })
        })
    })

    gsap.to("#circles", {
        scrollTrigger: {
            trigger: "#circles",
            start: "top 90%",
            end: "bootom -45%",
            scrub: 1,
        },
        x: "-52vw",
        ease: Circ.ease
    })
}
scrollCircle();


function planeAnim() {
    document.querySelectorAll(".section p").forEach(function (elem) {
        gsap.from(elem, {
            scrollTrigger: {
                trigger: elem,
                start: "top 90%"
            },
            opacity: 0,
            y: 50,
            stagger: 2,
            ease: Expo.ease,
            duration: 1
        })
    })
}
planeAnim();

function scrollPage() {
    gsap.to(".image1", {
        scrollTrigger: {
            trigger: "#page8",
            pin: true,
            start: "top 0%",
            end: "140% 0%",
            scrub: 1,
            // markers: true
        }
    })

    document.querySelectorAll("#page8").forEach(function (elem) {
        tl
            .to(elem.children, {
                scrollTrigger: {
                    trigger: elem,
                    start: "top 100%",
                    // pin:true,
                    // markers:true,
                    scrub: 1
                },
                stagger: 0.5,
                top: 0,
                ease: Circ.easeInOut
            })
    })
    document.querySelectorAll("#page8 .image1 img").forEach(function (everyimg) {
        gsap.to(everyimg, {
            scrollTrigger: {
                trigger: everyimg,
                start: "top 100%",
                // markers:true,
                scrub: 1,
            },
            stagger: 1,
            scale: 1.2,
        })
    })
    document.querySelectorAll("#page8 .images img").forEach(function (everyimg) {
        gsap.to(everyimg, {
            scrollTrigger: {
                trigger: everyimg,
                start: "-=1000 100%",
                // markers:true,
                scrub: 1,
            },
            stagger: 1,
            scale: 1.2,
        })
    })

    document.querySelectorAll(".overlay ").forEach(function (elem) {
        document.querySelectorAll(".overlay .text").forEach(function (every) {
            every.addEventListener("mouseenter", function () {
                gsap.to(elem, {
                    backgroundColor: "#0009",
                    duration: 1,
                    ease: Expo.ease
                })
                gsap.to("#cursor", {
                    backgroundColor: "transparent",
                    border: "1px solid #fff",
                    scale: 3,
                    ease: Circ.ease
                })
            })
            every.addEventListener("mouseleave", function () {
                gsap.to(elem, {
                    backgroundColor: "#0004",
                    ease: Circ.ease

                })
                gsap.to("#cursor", {
                    backgroundColor: "#fff",
                    border: "none",
                    scale: 1,
                    ease: Circ.ease

                })
            })
        })
    })
}
scrollPage();

function footer() {
    function bubble2(){
        gsap.to("#top-wrap-bubble2",{
            scrollTrigger: {
                trigger: "#top-wrap-bubble2",
                // markers: true,
                start: "+=20% 90%",
                end:"+=20% 50%",
                scrub: 1,
            },
            transform: "translate3d(0px, -10vw, 0px) scale3d(1, 1, 1) scale(1.2)",
            borderTopRightRadius: "40%",
            borderTopLeftRadius: "40%",
            ease:Circ.easeIn,
            duration:1,
        })
    }
    bubble2();

    function scrollLine(){
        gsap.from("#scroll-line2", {
            scrollTrigger: {
                trigger: "#scroll-line2",
                start: "top 90%"
            },
            x: 200
        })
        gsap.from("#scroll-line3", {
            scrollTrigger: {
                trigger: "#scroll-line3",
                start: "top 90%"
            },
            x: -200
        })
        tl
            .to("#scroll-line2", {
                scrollTrigger: {
                    trigger: "#scroll-line2",
                    // scroller:"#main",
                    start: "top 100%",
                    scrub: 1,
                    // markers:true
                },
                x: -200,
            })
            .to("#scroll-line3", {
                scrollTrigger: {
                    trigger: "#scroll-line3",
                    // scroller:"#main",
                    start: "top 100%",
                    scrub: 1,
                    // markers:true
                },
                x: 200,
                // ease:"elastic"
            })
    }
    scrollLine();
    
}
footer();
function toggle(){
    flag = 0;
    document.querySelector("#toggle").addEventListener("click", function () {
        if (flag === 0) {
            document.querySelector("#switch").style.left = "55%";
            document.documentElement.style.setProperty("--white", "#000")
            document.documentElement.style.setProperty("--top", "#fff")
            document.documentElement.style.setProperty("--black", "#E5E5E5")
            document.documentElement.style.setProperty("--grey", "#CCCCCC")
            document.documentElement.style.setProperty("--light", "#1F1F1F")
            flag = 1;
        } else {
            document.querySelector("#switch").style.left = "3%";
            document.documentElement.style.setProperty("--top", "#fff")
            document.documentElement.style.setProperty("--white", "#fff")
            document.documentElement.style.setProperty("--light", "#E5E5E5")
            document.documentElement.style.setProperty("--black", "rgb(8, 8, 8)")
            document.documentElement.style.setProperty("--grey", "#1f1f1f")
            flag = 0;
        }
    })
    
    document.querySelector("#toggle").addEventListener("mouseenter", function () {
        gsap.to("#cursor",{
            backgroundColor : "transparent",
            border : "thin solid #fff",
            scale : 2.5
        })
    })

    document.querySelector("#toggle").addEventListener("mouseleave", function () {
        gsap.to("#cursor",{
            backgroundColor : "#fff",
            border : "none",
            scale : 1
        })
    })
}
toggle();


