function throttle (func, ms) {
  let isWaiting = false;
  let storedArgs = null;

  function checkStoredArgs () {
    if (storedArgs == null) {
      isWaiting = false;
    } else {
      func(...storedArgs);
      storedArgs = null;
      setTimeout(checkStoredArgs, ms);
    }
  };

  return (...args) => {
    if (isWaiting) {
      storedArgs = args;
      return;
    }
  
    func(...args);
    isWaiting = true;
    setTimeout(checkStoredArgs, ms);
  }
};

function scrollspy () {
  const scrollspyContent = document.querySelector(`[data-spy="scroll"]`);
  const scrollspyLinksWrapper = document.querySelector(scrollspyContent.dataset.target);
  const scrollspyLinks = Array.from(scrollspyLinksWrapper.querySelectorAll('.list-group-item'));
  const remove = () => {
    const activeLink = scrollspyLinksWrapper.querySelector('.active');
    activeLink?.classList.remove('active');
  };

  window.addEventListener('scroll', throttle (callbackScroll, 200));

  function callbackScroll () {
    scrollspyLinks.forEach((link, i, arr) => {
      const listItem = document.querySelector(link.getAttribute('href'));
      const rect = listItem.getBoundingClientRect();
      if (rect.y < innerHeight/4 && rect.y > 0) {
        remove();
        link.classList.add('active');
      } else if (innerHeight + window.scrollY >= document.body.scrollHeight) {
        remove();
        arr[arr.length - 1].classList.add('active');
      }
    });
  };
};
scrollspy ();

function debounce (func, ms) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout (() => {
      func.apply(this, args)
    }, ms);
  }
};

window.addEventListener('scroll', debounce (() => console.log('HI'), 100));
