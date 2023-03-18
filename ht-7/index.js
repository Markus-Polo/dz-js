function initCollapse(){
  const buttons = Array.from(document.querySelectorAll(`[data-toggle="collapse"]`));
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const cardId = button.getAttribute('href') || button.dataset.target;
      collapseShow(cardId);
    })
  });
  const collapseShow = (cardId) => {
    const card = document.querySelector(cardId);
    if (card.clientHeight !== 0) {
      card.style.height = 0;
    } else {
      card.style.height = card.scrollHeight + 'px';
    }
  };
};
initCollapse()
