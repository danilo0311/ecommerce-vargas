var slideIndex = 0;
function slider(){
    let i;
    const x = document.getElementsByName("slider-photo-gallery");
    if (x.length !== 0) {
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > x.length) {slideIndex = 1}
      x[slideIndex -1].style.display = "block";
      setTimeout(slider,3000);
      console.log(x.length);
    }
}