var myNav = document.getElementById('nav');
window.onscroll = function () { 
    if (document.body.scrollTop >= 50 ) {
        myNav.classList.add("normal");
        myNav.classList.remove("scrolled");
    } 

    if (document.body.scrollTop <= 50 ) {
        myNav.classList.add("scrolled");
        myNav.classList.remove("normal");
    }
};