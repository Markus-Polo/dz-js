function initCollapse(){
  const buttons = Array.from(document.querySelectorAll(`[data-toggle="collapse"]`));
  let cardId;
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      cardId = button.getAttribute('href') || button.dataset.target;
      collapseShow();
    })
  });
  const collapseShow = () => {
    const card = document.querySelector(cardId);
    if (card.clientHeight !== 0) {
      card.style.height = 0;
    } else {
      console.log(card.scrollHeight)
      card.style.height = card.scrollHeight + 'px';
    }
  };
};
initCollapse()
