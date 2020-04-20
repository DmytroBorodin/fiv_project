"use strict"
let win = document.querySelector('html');
let nav = document.querySelector('.nav');
let menu = document.querySelector('.header__nav');
let login = document.querySelector('.header__login');
let body = document.querySelector('body');

let lastScrollTop = 0;

//hide navbar vy scrolling

window.onscroll = onScroll;
function onScroll (e) {
    var top = window.pageYOffset; // how much scroll from top;
    if (lastScrollTop > top) {
    	nav.classList.remove('transparent');
		menu.classList.remove('transparent__content');
		login.classList.remove('transparent__content');
    } else if (lastScrollTop < top) {
		nav.classList.add('transparent');
		menu.classList.add('transparent__content');
		login.classList.add('transparent__content');
    }
    lastScrollTop = top;
}



//bburger
let burger = document.querySelector('.header__burger');
let headerMenu = document.querySelector('.header__menu');
let listClose = document.querySelector('.list__close');
burger.addEventListener('click', function(){
	headerMenu.classList.add('top0');
	body.classList.add('lock');
})

listClose.addEventListener('click', function(){
	body.classList.remove('lock');
	headerMenu.classList.remove('top0');
})

//video modal window
let videoBtn = document.querySelector('.video__btn');
let videoCloseBtn = document.querySelector('.video__close__btn');
let modalVideo = document.querySelector('.video__block');
let video  = document.querySelector('.video');
let url = video.getAttribute('src');

videoBtn.addEventListener('click', function(){
	video.setAttribute('src', url);
	modalVideo.classList.remove('video__hidden');
	body.classList.add('lock');
})
videoCloseBtn.addEventListener('click', function(){
	video.setAttribute('src', '');
	modalVideo.classList.add('video__hidden');
	body.classList.remove('lock');
})