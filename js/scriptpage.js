function scrollBanner() {
  var scrollPos;
  var headerImg = document.querySelector('.header img');
  var logoimg = document.querySelector('.logo');
  var btnimg = document.querySelector('.myBtn');
  scrollPos = window.scrollY;

   
  if (scrollPos <= 600) {
      headerImg.style.transform =  "translateY(" + (-scrollPos/3) +"px" + ")";
	  logoimg.style.transform =  "translateX(" + (-scrollPos/2) +"px" + ")";
      headerImg.style.opacity = 1 - (scrollPos/600);
	  logoimg.style.opacity = 1 - (scrollPos/600); 
	  btnimg.style.transform =  "translateY(" + (-scrollPos/5) +"px" + ")"; 
	  
  
  }
}
window.addEventListener('scroll', scrollBanner);

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
}