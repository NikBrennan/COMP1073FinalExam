// JavaScript Document
let requestURL = 'https://jessicagilfillan.github.io/Final_Exam_Prep/Q3/cats.json';

let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json'; 
request.send();

let button = document.querySelector('button');
button.addEventListener('click', function(){
    let catInfo = request.response;
    console.log(catInfo); 
    catData(catInfo); 
});

function catData(jsonObj){
    let catData = jsonObj.cats;
    let body = document.querySelector('body');
    for (let i = 0; i < catData.length; i++) {
        let p = document.createElement('p');
        p.innerHTML = catData[i].name + " is a " + catData[i].age + " year old " + catData[i].species + ". Their fav foods are " + catData[i].favFoods + "."
        body.appendChild(p);
    }
    let shadow = document.createElement('img');
    shadow.setAttribute('src', 'assets/shadow.jpg');
    body.appendChild(shadow);

    let stevie = document.createElement('img');
    stevie.setAttribute('src', 'assets/stevie.jpg');
    body.appendChild(stevie);

    let zoey = document.createElement('img');
    zoey.setAttribute('src', 'assets/zoey.jpg');
    body.appendChild(zoey);
}