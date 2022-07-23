function slider() {
  /// creating slider

  let slideIndex = 1;
  let offset = 0;

  const slides = document.querySelectorAll(".offer__slide"),
    prevButton = document.querySelector(".offer__slider-prev"),
    nextButton = document.querySelector(".offer__slider-next"),
    current = document.getElementById("current"),
    total = document.getElementById("total"),
    slidesWrapper = document.querySelector(".offer__slider-wrapper"),
    slidesField = document.querySelector(".offer_slider-inner"),
    slider = document.querySelector(".offer__slider");
  width = window.getComputedStyle(slidesWrapper).width;

  if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
    current.textContent = `0${slideIndex}`;
  } else {
    total.textContent = slides.length;
    current.textContent = slideIndex;
  }

  slidesField.style.width = 100 * slides.length + "%";
  slidesField.style.display = "flex";
  slidesField.style.transition = "0.5s all";

  slidesWrapper.style.overflow = "hidden";

  slides.forEach((slide) => {
    slide.style.width = width;
  });

  slider.style.position = "relative";

  const indicators = document.createElement("ol"),
    dots = [];
  indicators.classList.add("carousel-indicators");
  slider.append(indicators);

  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("li");
    dot.setAttribute("data-slide-to", i + 1);
    dot.classList.add("dot");

    if (i == 0) {
      dot.style.opacity = 1;
    }
    indicators.append(dot);
    dots.push(dot);
  }

  function changeDotsOpasity() {
    dots.forEach((dot) => (dot.style.opacity = ".5"));
    dots[slideIndex - 1].style.opacity = 1;
  }

  function fixCountRendering() {
    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }
  }

  function replacePx(str) {
    if (offset == +str.replace(/\D/g, "") * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += +str.replace(/\D/g, "");
    }
  }

  function slidesTransform() {
    slidesField.style.transform = `translateX(-${offset}px)`;
  }

  nextButton.addEventListener("click", () => {
    replacePx(width);

    slidesTransform();

    if (slideIndex == slides.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }

    fixCountRendering();

    changeDotsOpasity();
  });

  prevButton.addEventListener("click", () => {
    replacePx(width);

    slidesTransform();

    if (slideIndex == 1) {
      slideIndex = slides.length;
    } else {
      slideIndex--;
    }

    fixCountRendering();

    changeDotsOpasity();
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const slideTo = e.target.getAttribute("data-slide-to");
      slideIndex = slideTo;

      offset = +width.replace(/\D/g, "") * (slideTo - 1);

      slidesTransform();

      fixCountRendering();

      changeDotsOpasity();
    });
  });
}

module.exports = slider;