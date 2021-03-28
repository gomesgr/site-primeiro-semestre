function scrollBanner() {
  var scrollPos;
  var headerImg = document.querySelector('#headercontato img');
 
  scrollPos = window.scrollY;

  if (scrollPos <= 600) {
      headerImg.style.transform =  "translateY(" + (-scrollPos/3) +"px" + ")";
      headerImg.style.opacity = 1 - (scrollPos/600);
  }
}

window.addEventListener('scroll', scrollBanner);