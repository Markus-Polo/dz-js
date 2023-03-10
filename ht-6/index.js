function initTooltip(){
  const elments = Array.from(document.querySelectorAll(`[data-toggle="tooltip"]`));
  elments.forEach(elment => {
    const message = document.createElement('p');
    elment.addEventListener('mouseover', () => {
      const title = elment.getAttribute('title');
      const placement = elment.dataset.placement;
      const top = elment.getBoundingClientRect().top + window.pageYOffset;
      const right = elment.getBoundingClientRect().right + window.pageXOffset;
      const bottom = elment.getBoundingClientRect().bottom + window.pageYOffset;
      const left = elment.getBoundingClientRect().left + window.pageXOffset;
      const height = elment.getBoundingClientRect().height;
      const width = elment.getBoundingClientRect().width;
      message.classList.add('message');
      message.innerHTML = `${title}`;
      document.body.append(message);
      if(placement === 'top') {
        message.style.left = ((left + width/2) - message.getBoundingClientRect().width/2) + "px";
        message.style.top = (top - (message.getBoundingClientRect().height + 15)) + "px";
        message.classList.add('arrow-top')
      } else if (placement === 'bottom') {
        message.style.left = ((left + width/2) - message.getBoundingClientRect().width/2) + "px";
        message.style.top = (bottom + 15) + "px";
        message.classList.add('arrow-bottom');
      } else if (placement === 'right') {
        message.style.left = (right + 15) + "px";
        message.style.top = ((top + height/2) - message.getBoundingClientRect().height/2) + "px";
        message.classList.add('arrow-right');
      } else if (placement === 'left') {
        message.style.left = (left - (message.getBoundingClientRect().width + 15)) + "px";
        message.style.top = ((top + height/2) - message.getBoundingClientRect().height/2) + "px";
        message.classList.add('arrow-left');
      }
    })
    elment.addEventListener('mouseout', () => {
      message.remove();
    })
  })
};
initTooltip()
