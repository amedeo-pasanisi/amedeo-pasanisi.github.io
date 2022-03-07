let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/face.png') {
      myImage.setAttribute('src','images/house.png');
    } else {
      myImage.setAttribute('src','images/face.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'i cani is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
setUserName();
} else {
let storedName = localStorage.getItem('name');
myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}