function carousel () {
  const buttons = Array.from(document.querySelectorAll('[data-slide="next"], [data-slide="prev"]'));
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      directionDetermination(button);
    });
  });

  function directionDetermination(button) {
    const buttonTarget = button.dataset.target;
    const direction = button.dataset.slide;
    const carouselWrapper = document.querySelector(buttonTarget);
    const carouselItems = Array.from(carouselWrapper.querySelectorAll('.carousel-item'));
      slide(carouselItems, direction);
  };

  function slide(carouselItems, direction) {
    let directionPrev = 'left';
    let directionNext = 'right';
    let nextItem;
    let stop = false;
    let i = -1;
    const timeForPrepare = 10;
    const timeForSliding = 600;

    const preparationForSlide = () => {
      carouselItems[i].style[directionPrev]='0';
      carouselItems[nextItem].style.display='block';
      carouselItems[nextItem].style[directionNext]='-100%';
    };

    const sliding = () => {
      setTimeout(() => {
        carouselItems[i].style[directionPrev]='-100%';
        carouselItems[nextItem].style[directionNext]='0';
      }, timeForPrepare);
    };

    const completionSliding = () => {
      setTimeout(() => {
        carouselItems[i].classList.remove('active');
        carouselItems[nextItem].classList.add('active');
        carouselItems[i].style[directionPrev]='';
        carouselItems[nextItem].style.display='';
        carouselItems[nextItem].style[directionNext]='';
      }, timeForSliding);
    };

    if (direction === 'prev') {
      directionPrev = 'right';
      directionNext = 'left';
    };

    while (stop === false) {
      i++;
      if (direction === 'next' && carouselItems.length - 1 !== i ) {
        nextItem = i + 1;
      } else if (direction === 'next') {
        nextItem = 0;
      } else if (direction === 'prev' && i !== 0) {
        nextItem = i - 1;
      } else {
        nextItem = carouselItems.length - 1;
      };

      if (carouselItems[i].classList.contains('active')) {
        preparationForSlide();
        sliding();
        completionSliding();
        stop = true;
      };
    };
  };
};
carousel();
