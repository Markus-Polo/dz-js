function initTabs(){
  const buttons = document.querySelectorAll(`[data-toggle='tab']`);
  Array.from(buttons).forEach(button => {
    button.addEventListener('click', function() {
      const targetSelector = this.dataset.target;
      const target = document.querySelector(targetSelector);
      target.parentElement.querySelector('.active').classList.remove('active');
      target.classList.add('active');
    })
  })
};
initTabs()
