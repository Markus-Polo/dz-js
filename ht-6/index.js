function initTooltip(){
  const elements = Array.from(document.querySelectorAll(`[data-toggle="tooltip"]`));
  elements.forEach(element => {
    const message = document.createElement('p');
    element.setAttribute('data-title', element.getAttribute('title'));
    const title = element.dataset.title;
    element.removeAttribute('title');
    element.addEventListener('mouseover', () => {
      const placement = element.dataset.placement;
      const top = element.getBoundingClientRect().top + window.pageYOffset;
      const right = element.getBoundingClientRect().right + window.pageXOffset;
      const bottom = element.getBoundingClientRect().bottom + window.pageYOffset;
      const left = element.getBoundingClientRect().left + window.pageXOffset;
      const height = element.getBoundingClientRect().height;
      const width = element.getBoundingClientRect().width;
      message.classList.add('message');
      message.innerHTML = title;
      document.body.append(message);
      const horizontalButtonCenter = left + width/2;
      const verticalButtonCenter = top + height/2;
      const horizontalMessageCenter = message.getBoundingClientRect().width/2;
      const verticalMessageCenter = message.getBoundingClientRect().height/2;
      switch (placement) {
        case 'top':
          message.style.left = (horizontalButtonCenter - horizontalMessageCenter) + "px";
          message.style.top = (top - (message.getBoundingClientRect().height + 15)) + "px";
          message.classList.add('arrow-top');
          break;
        case 'bottom':
          message.style.left = (horizontalButtonCenter - horizontalMessageCenter) + "px";
          message.style.top = (bottom + 15) + "px";
          message.classList.add('arrow-bottom');
          break;
        case 'right':
          message.style.left = (right + 15) + "px";
          message.style.top = (verticalButtonCenter - verticalMessageCenter) + "px";
          message.classList.add('arrow-right');
          break;
        case 'left':
          message.style.left = (left - (message.getBoundingClientRect().width + 15)) + "px";
          message.style.top = (verticalButtonCenter - verticalMessageCenter) + "px";
          message.classList.add('arrow-left');
          break;
      }
    })
    element.addEventListener('mouseout', () => {
      message.remove();
    })
  })
};
initTooltip()
