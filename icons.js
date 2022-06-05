'use strict';

const exp = document.getElementById('experience');
const skill = document.getElementById('skill-ratings');
const foot = document.getElementById('footer');

document.getElementById('exp-icon').addEventListener("click", function (e) {
    console.log("hello")
    exp.scrollIntoView({ behavior: 'smooth' });
})
document.getElementById('skill-icon').addEventListener("click", function (e) {
    console.log("hello")
    skill.scrollIntoView({ behavior: 'smooth' });
})
document.getElementById('contact-icon').addEventListener("click", function (e) {
    console.log("hello")
    foot.scrollIntoView({ behavior: 'smooth' });
})
