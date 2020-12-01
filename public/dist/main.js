"use strict";

function helloWorld() {
  console.log('Hello');
}

helloWorld();

var helloWorldEs6 = function helloWorldEs6() {
  console.log('Hello new world');
};

helloWorldEs6();
var myNav = document.getElementById('nav');

window.onscroll = function () {
  if (document.body.scrollTop >= 50) {
    myNav.classList.add("normal");
    myNav.classList.remove("scrolled");
  }

  if (document.body.scrollTop <= 50) {
    myNav.classList.add("scrolled");
    myNav.classList.remove("normal");
  }
};