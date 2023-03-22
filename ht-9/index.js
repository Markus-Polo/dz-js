function scrollspy () {
  const scrollspyContent = document.querySelector(`[data-spy="scroll"]`);
  const scrollspyLincksWraper = document.querySelector(scrollspyContent.dataset.target);
  const scrollspyLincks = Array.from(scrollspyLincksWraper.querySelectorAll('.list-group-item'));
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    scrollspyLincks.forEach((linck, i) => {
      const listItem = document.querySelector(linck.getAttribute('href'));
      if (linck.classList.contains('acktive')) {
        linck.classList.remove('acktive');
      };
      if (scrollPosition + 1 >= listItem.offsetTop) {
        linck.classList.add('acktive');
      };
    });
  });
};
scrollspy();