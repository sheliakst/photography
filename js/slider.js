const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const auto = true; /* not auto scrolling  */
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  /* get current class */
  const current = document.querySelector(".current");
  /* remove current class */
  current.classList.remove("current");
  //check for next slide
  if (current.nextElementSibling) {
    //add current to next simbling
    current.nextElementSibling.classList.add("current");
  } else {
    //add curent to start
    slides[0].classList.add("current");
  }

  setTimeout(() => current.classList.remove("current"));
};

const prevSlide = () => {
  /* get current class */
  const current = document.querySelector(".current");
  /* remove current class */
  current.classList.remove("current");
  //check for prev slide
  if (current.previousElementSibling) {
    //add current to next simbling
    current.previousElementSibling.classList.add("current");
  } else {
    //add curent to start
    slides[slides.length - 1].classList.add("current");
  }

  setTimeout(() => current.classList.remove("current"));
};

//buttons events
next.addEventListener("click", e => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});
//buttons events
prev.addEventListener("click", e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

//auto slide
if (auto) {
  //run interval time slide
  slideInterval = setInterval(nextSlide, intervalTime);
}
