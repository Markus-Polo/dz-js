function initCollapse(){
  const buttons = Array.from(document.querySelectorAll(`[data-toggle="collapse"]`));
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const cardId = button.getAttribute('href') || button.dataset.target;
      collapseShow(cardId, button);
    })
  });
  const collapseShow = (cardId, button) => {
    const parentButton = button.parentElement.parentElement.parentElement;
    const cards = Array.from(parentButton.querySelectorAll(cardId));
    const cardShow = parentButton.querySelector('.show');
    cards.forEach(card => {
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
      }
    })
  };
};
initCollapse()
