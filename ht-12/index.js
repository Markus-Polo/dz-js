function carousel () {
  const nextButtons = Array.from(document.querySelectorAll(`[data-slide="next"]`));
  const prevButtons = Array.from(document.querySelectorAll(`[data-slide="prev"]`));
  let carouselWrapper;
  let carouselItems;
  nextButtons.forEach(nextButton => {
    nextButton.addEventListener('click', () => {
      carouselWrapper = document.querySelector(`${nextButton.dataset.target}`);
      carouselItems = Array.from(carouselWrapper.querySelectorAll('.carousel-item'));
      slideLeft();
    });
  });
  prevButtons.forEach(prevButton => {
    prevButton.addEventListener('click', () => {
      carouselWrapper = document.querySelector(`${prevButton.dataset.target}`);
      carouselItems = Array.from(carouselWrapper.querySelectorAll('.carousel-item'));
      slideRight();
    });
  });
  function slideLeft() {
    let nextItem;
    let stop = false;
    for(let i = 0; stop === false; i++) {
      if (carouselItems.length - 1 !== i ) {
        nextItem = i + 1;
      } else {
        nextItem = 0;
      };
      if(carouselItems[i].classList.contains('active')) {
        carouselItems[i].style.left='0';
        carouselItems[nextItem].style.display='block';
        carouselItems[nextItem].style.right='-100%';
        setTimeout(() => {
          carouselItems[i].style.left='-100%';
          carouselItems[nextItem].style.right='0';
        }, 10);
        setTimeout(() => {
          carouselItems[i].classList.remove('active');
          carouselItems[nextItem].classList.add('active');
          carouselItems[i].style.left='';
          carouselItems[nextItem].style.display='';
          carouselItems[nextItem].style.right='';
        }, 600);
        stop = true;
      };
    };
  };
  function slideRight() {
    let prevItem;
    let stop = false;
    for(let i = 0; stop === false; i++) {
      if (i !== 0) {
        prevItem = i - 1;
      } else {
        prevItem = carouselItems.length - 1;
      };
      if(carouselItems[i].classList.contains('active')) {
        carouselItems[i].style.right='0';
        carouselItems[prevItem].style.display='block';
        carouselItems[prevItem].style.left='-100%';
        setTimeout(() => {
          carouselItems[i].style.right='-100%';
          carouselItems[prevItem].style.left='0';
        }, 10);
        setTimeout(() => {
          carouselItems[i].classList.remove('active');
          carouselItems[prevItem].classList.add('active');
          carouselItems[i].style.right='';
          carouselItems[prevItem].style.display='';
          carouselItems[prevItem].style.left='';
        }, 600);
        stop = true;
      };
    };
  }
};
carousel();
