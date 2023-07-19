
setTimeout(() => {
  
const btnRent = document.getElementById('btnRent')
const btnSell = document.getElementById('btnSell')
const HomeSearchInput = document.getElementById('HomeSearchInput')
btnRent.addEventListener('focus',()=>{console.log("fouced")})





// slider
const sliderContainer = document.getElementById("sliderContainer");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let translateX = 0;
  let slideWidth = sliderContainer.children[0].offsetWidth + 20; // Account for space between images

  function updateSlideWidth() {
    slideWidth = sliderContainer.children[0].offsetWidth + 20; // Account for space between images
  }

  prevBtn.addEventListener("click", () => {
    if (translateX === 0) return;
    translateX += slideWidth;
    updateSlider();
  });

  nextBtn.addEventListener("click", () => {
    const sliderWidth = sliderContainer.scrollWidth;
    const containerWidth = sliderContainer.offsetWidth;
    if (translateX === -(sliderWidth - containerWidth)) return;
    translateX -= slideWidth;
    updateSlider();
  });

  function updateSlider() {
    sliderContainer.style.transform = `translateX(${translateX}px)`;
    prevBtn.disabled = translateX === 0;
    nextBtn.disabled = translateX === -(sliderContainer.scrollWidth - sliderContainer.offsetWidth);
  }

  // Listen for window resize and update slide width accordingly
  window.addEventListener("resize", () => {
    updateSlideWidth();
    updateSlider();
  });

  // Call updateSlideWidth initially to set the correct slide width
  updateSlideWidth();




}, 1000);