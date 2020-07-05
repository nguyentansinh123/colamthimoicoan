var r = Math.floor(Math.random()*255);
var g = Math.floor(Math.random()*255);
var b = Math.floor(Math.random()*255);
 
var x = `rgb( ${r},${g},${b} )`;

var colorstringel = document.getElementById("color_string");

colorstringel.textContent=x;

var ballcontainerel= document.getElementById("ball_container");
var balls = document.getElementsByClassName("ball");
 var y = Math.floor(Math.random()*3);
 balls[y].style.backgroundColor=x;
 