import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
document.querySelector(".excuse").innerHTML = excusas()
};

function getRandomWord(arr) {
  let result= arr[Math.floor(Math.random()*arr.length)]
  return result 
}

function excusas() {
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  let quien = who[Math.floor(Math.random()* who.length)]
  let accion = action[Math.floor(Math.random()* action.length)]
  let que = what[Math.floor(Math.random()* what.length)]
  let cuando = when[Math.floor(Math.random()* when.length)]




  return(
    getRandomWord(who) + " " + getRandomWord(action)+ " " + getRandomWord(what) + " " + getRandomWord(when)
  )
}
