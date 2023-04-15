function carousel () {
  const nextButtons = Array.from(document.querySelectorAll(`[data-slide="next"]`));
  const prevButtons = Array.from(document.querySelectorAll(`[data-slide="prev"]`));
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
    let direction;
    const buttonTarget = button.dataset.target;
    const buttonSlide = button.dataset.slide;
    const carouselWrapper = document.querySelector(`${buttonTarget}`);
    const carouselItems = Array.from(carouselWrapper.querySelectorAll('.carousel-item'));
    if(buttonSlide === 'next') {
      direction = true;
      slide(carouselItems, direction);
    } else {
      direction = false;
      slide(carouselItems, direction);
    }
  };
  function slide(carouselItems, direction) {
    let nextItem;
    let prevItem;
    let stop = false;
    for(let i = 0; stop === false; i++) {
      if (direction === true && carouselItems.length - 1 !== i ) {
        nextItem = i + 1;
      } else if (direction === true) {
        nextItem = 0;
      } else if (direction === false && i !== 0) {
        prevItem = i - 1;
      } else {
        prevItem = carouselItems.length - 1;
      };
      if (carouselItems[i].classList.contains('active') && direction === true) {
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
      } else if (carouselItems[i].classList.contains('active') && direction === false) {
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
      }
    };
  };
};
carousel();
