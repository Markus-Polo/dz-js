function scrollspy () {
  const scrollspyContent = document.querySelector(`[data-spy="scroll"]`);
  const scrollspyLincksWraper = document.querySelector(scrollspyContent.dataset.target);
  const scrollspyLincks = Array.from(scrollspyLincksWraper.querySelectorAll('.list-group-item'));
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    scrollspyLincks.forEach((linck, i, arr) => {
      const listItem = document.querySelector(linck.getAttribute('href'));
      const rect = listItem.getBoundingClientRect();
      let remove = () => {
        scrollspyLincks.forEach(linck => {
          linck.classList.remove('acktive');
        });
    }
      if (rect.y < innerHeight/4 && rect.y > 0) {
        remove();
        linck.classList.add('acktive');
      } else if (innerHeight + window.scrollY >= document.body.scrollHeight) {
        remove();
        arr[arr.length - 1].classList.add('acktive');
      }
    });
  });
};
scrollspy();