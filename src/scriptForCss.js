console.log('12312312312');
let scrollToTop = document.getElementById('back-to-top');

$(document).ready(function() { 
    

});


scrollToTop.addEventListener('click', ()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
})