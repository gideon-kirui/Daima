'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [overlay, navCloseBtn, navOpenBtn];

/**
 * close navbar when click on any navbar link
 */

for (let i = 0; i < navbarLinks.length; i++) { navElemArr.push(navbarLinks[i]); }

/**
 * addd event on all elements for toggling navbar
 */

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
}



/**
 * header active state
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 400 ? header.classList.add("active")
    : header.classList.remove("active");
}); 

// PROFILE DROPDOWN
const profile = document.querySelector('.header-bottom-actions .profile');
const imgProfile = profile.querySelector('img');
const dropdownProfile = profile.querySelector('.profile-link');

imgProfile.addEventListener('click', function () {
	dropdownProfile.classList.toggle('show');
})

 // Wrap the content of the div in another div for scrolling
 var scrollingDiv = document.getElementById("scrollingDiv");
 var content = scrollingDiv.innerHTML;
 scrollingDiv.innerHTML = '<div id="scrollingContent">' + content + '</div>';

 // Cart popup
function openCart() {
  document.querySelector('.cart-cont').style.display = 'block'
}

function closeCart() {
  document.querySelector('.cart-cont').style.display = 'none'
}

// Mission, Vission, History And core Values //

// Mission
function openMission() {
  document.querySelector('.mission').style.display = 'block'
}

function closeMission() {
  document.querySelector('.mission').style.display = 'none'
}

// Vission
function openVission() {
  document.querySelector('.vission').style.display = 'block'
}

function closeVission() {
  document.querySelector('.vission').style.display = 'none'
}

// Core values
function openCvalues() {
  document.querySelector('.core-values').style.display = 'block'
}

function closeCvalues() {
  document.querySelector('.core-values').style.display = 'none'
}

// History
function openHistory() {
  document.querySelector('.history').style.display = 'block'
}

function closeHistory() {
  document.querySelector('.history').style.display = 'none'
}

// Questions and Answers pop up

document.addEventListener('DOMContentLoaded', function() {
  const questions = document.querySelectorAll('.question h2');

  questions.forEach(function(question) {
    question.addEventListener('click', function() {
      const answer = this.nextElementSibling;
      answer.classList.toggle('show');
    });
  });
});