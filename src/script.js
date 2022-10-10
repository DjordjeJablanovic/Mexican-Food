const logo = document.querySelector('.logo');
const upperBoxHolder = document.getElementById('upper-box-holder');
const lowerBoxHolder = document.getElementById('lower-box-holder');
const lowerPartOpacity = lowerBoxHolder.getElementsByClassName('lower-part');
let upperBox = upperBoxHolder.getElementsByClassName('upper-box');
let lowerBox = lowerBoxHolder.getElementsByClassName('lower-box');
let p = upperBoxHolder.getElementsByTagName('p');
const premiumMenu = document.getElementById('premium-menu');
const premiumIdHolder = document.getElementById('premium-food-holder');
let premiumFoodClass = premiumIdHolder.querySelectorAll('.premiumFood');
let holder = document.getElementById('holder');
let blackLowOpacity = document.getElementsByClassName('black-low-opacity');



logo.addEventListener('click', () => {
    location.href = "index.html";
});

premiumMenu.addEventListener('mouseenter', () => {
    premiumFoodClass.forEach(function(e) {
        e.style.display = 'block';
    });
})
premiumMenu.addEventListener('mouseleave', () => {
    premiumFoodClass.forEach(function(e) {
        e.style.display = 'none';
    });
});

// let myInterval = setInterval( hideAndShowUpper, 100);
// let showHideSecond = setInterval ( hideAndShowLower, 100);

function hideAndShowUpper(){ // upper-box show and hide P tagg
    for (let i=0; i<upperBox.length; i++){
        upperBox[i].addEventListener('mouseenter', () =>{
            blackLowOpacity[i].style.visibility ='visible';
        })
    }
    for (let i=0; i<upperBox.length; i++){
        upperBox[i].addEventListener('mouseleave', () =>{
            blackLowOpacity[i].style.visibility ='hidden';
        })
    }
}
function hideAndShowLower(){
    for (let i=0; i<lowerBox.length; i++){
        lowerBox[i].addEventListener('mouseenter', () =>{
            lowerPartOpacity[i].style.visibility ='visible';
        })
    }
    for (let i=0; i<lowerBox.length; i++){
        lowerBox[i].addEventListener('mouseleave', () =>{
            lowerPartOpacity[i].style.visibility ='hidden';
        })
    }
}
hideAndShowUpper();
hideAndShowLower();