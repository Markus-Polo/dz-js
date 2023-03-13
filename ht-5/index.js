function initModal(){
  const buttons = document.querySelectorAll(`[data-toggle='modal']`);
  const closeBtns = document.querySelectorAll(`[data-dismiss='modal']`);
  let target;
  Array.from(buttons).forEach(button => {
    button.addEventListener('click', () => {
      const targetSelector = button.dataset.target;
      target = document.querySelector(targetSelector);
      target.classList.add('show');
      close();
    });
  });
  Array.from(closeBtns).forEach(closeButtons => {
    closeButtons.addEventListener('click', () => {
      target.classList.remove('show');
    });
  });
  const close = () => {
    target.addEventListener('click', (event) => {
      if(target === event.target) {
        target.classList.remove('show');
      };
    });
  };
};
initModal()
