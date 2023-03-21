function initCollapse(){
  const buttons = Array.from(document.querySelectorAll(`[data-toggle="collapse"]`));
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const cardId = button.getAttribute('href') || button.dataset.target;
      collapseShow(cardId, button);
    })
  });
  const collapseShow = (cardId, button) => {
    const card = document.querySelector(cardId);
    const accordionContaine = document.querySelector(card.dataset.parent);
    const cardShow = accordionContaine.querySelector('.show');
    if (card.clientHeight !== 0) {
      card.style.height = 0;
      button.ariaExpanded = 'false'
    } else if (cardShow) {
      cardShow.style.height = 0;
      cardShow.classList.remove('show');
      card.style.height = card.scrollHeight + 'px';
      button.ariaExpanded = 'true';
      card.classList.add('show');
    } else {
      card.style.height = card.scrollHeight + 'px';
      button.ariaExpanded = 'true';
      card.classList.add('show');
    };
  };
};
initCollapse()
