(() => {
  const list = document.querySelectorAll('#tablist');
  for(let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', (event) => {
    const toggle = event.target.dataset.toggle;
    const target = event.target.dataset.target;
    const listName = list[i].dataset.number;
    const elmentList = document.querySelector([listName]).children;
      if(toggle === 'tab') {
        for(let i = 0; i < elmentList.length; i++) {
          elmentList[i].classList.remove("active");
        }
        element = document.querySelector([target]);
        element.classList.add("active");
      }
    })
  }
})();
