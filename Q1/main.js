// JavaScript Document

let main = document.querySelector('main');        // queryselectorall  -> queryselector
let submitButton = document.querySelector('input[type="submit"]');
let body = document.querySelector('body');            // documant -> document 

submitButton.addEventListener('click', function(e) {    // clickityclick -> click
  let personName = document.querySelector('input').value;       // input.value    -> document.querySelector('input').value
  let para = document.createElement('p'); 
  para.innerHTML = '<h3>Hey there ' + personName + '! Thanks for stopping by!</h3>'; 
  main.appendChild(para);         // paragraph -> para
  body.setAttribute('class', 'meow'); 
  console.log('=^..^='); 
}); 