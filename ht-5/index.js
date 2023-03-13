function modal(){
  const buttons = document.querySelectorAll(`[data-toggle='modal']`);
  Array.from(buttons).forEach(button => {
    button.addEventListener('click', () => {
      const targetSelector = button.dataset.target;
      const target = document.querySelector(targetSelector);
      const modalWrapers = document.querySelectorAll(`#exampleModal`);
      const closeBtns = document.querySelectorAll(`[data-dismiss="modal"]`);
      target.classList.add('show');
      Array.from(modalWrapers).forEach(modalWraper => {
        modalWraper.addEventListener('click', (event) => {
          console.log(event)
          Array.from(closeBtns).forEach(closeBtn => {
            if(closeBtn === event.target) {
              target.classList.remove('show');
            }
          })
        })
      })
    })
  })
};
modal()
