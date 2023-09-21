$(document).ready(function(){
        $(window).scroll(function(){
            let scroll = $(window).scrollTop();
            if(scroll > 100){
                $("netflix-navbar").css("background","#0c0c0c")
            }else{
                $(".netflix.navbar").css("background","transparent")
            }
        })
})

// console.log(scroll)

let windowScroll = ()=>{
    let scroll = window.scrollY
    let navbar = document.querySelector(".netflix-navbar")

    if(scroll >100){
        navbar.style.background = "#0c0c0c"
    }else{
        navbar.style.background = "transparent"
    }
}