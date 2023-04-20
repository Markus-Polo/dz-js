function carousel () {
  const nextButtons = Array.from(document.querySelectorAll(`[data-slide="next"]`));
  const prevButtons = Array.from(document.querySelectorAll(`[data-slide="prev"]`));
  let directionPrev;
  let directionNext;
  nextButtons.forEach(button => {
    button.addEventListener('click', () => {
      directionDetermination(button);
    });
  });
  prevButtons.forEach(button => {
    button.addEventListener('click', () => {
      directionDetermination(button);
    });
  });
  function directionDetermination(button) {
    const buttonTarget = button.dataset.target;
    const buttonSlide = button.dataset.slide;
    const carouselWrapper = document.querySelector(buttonTarget);
    const carouselItems = Array.from(carouselWrapper.querySelectorAll('.carousel-item'));
    if(buttonSlide === 'next') {
      directionPrev = 'left';
      directionNext = 'right';
      slide(carouselItems, buttonSlide);
    } else {
      directionPrev = 'right';
      directionNext = 'left';
      slide(carouselItems, buttonSlide);
    }
  };
  function slide(carouselItems, buttonSlide) {
    let nextItem;
    let stop = false;
    for(let i = 0; stop === false; i++) {
      if (buttonSlide === 'next' && carouselItems.length - 1 !== i ) {
        nextItem = i + 1;
      } else if (buttonSlide === 'next') {
        nextItem = 0;
      } else if (buttonSlide === 'prev' && i !== 0) {
        nextItem = i - 1;
      } else {
        nextItem = carouselItems.length - 1;
      };
      if (carouselItems[i].classList.contains('active')) {
        carouselItems[i].style[directionPrev]='0';
        carouselItems[nextItem].style.display='block';
        carouselItems[nextItem].style[directionNext]='-100%';
        setTimeout(() => {
          carouselItems[i].style[directionPrev]='-100%';
          carouselItems[nextItem].style[directionNext]='0';
        }, 10);
        setTimeout(() => {
          carouselItems[i].classList.remove('active');
          carouselItems[nextItem].classList.add('active');
          carouselItems[i].style[directionPrev]='';
          carouselItems[nextItem].style.display='';
          carouselItems[nextItem].style[directionNext]='';
        }, 600);
        stop = true;
      };
    };
  };
};
carousel();
