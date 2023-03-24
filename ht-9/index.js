function scrollspy () {
  const scrollspyContent = document.querySelector(`[data-spy="scroll"]`);
  const scrollspyLinksWrapper = document.querySelector(scrollspyContent.dataset.target);
  const scrollspyLinks = Array.from(scrollspyLinksWrapper.querySelectorAll('.list-group-item'));
  const remove = () => {
    const activeLink = scrollspyLinksWrapper.querySelector('.active');
    activeLink?.classList.remove('active');
  };
  window.addEventListener('scroll', () => {
    scrollspyLinks.forEach((link, i, arr) => {
      const listItem = document.querySelector(link.getAttribute('href'));
      const rect = listItem.getBoundingClientRect();
      if (rect.y < innerHeight/4 && rect.y > 0) {
        remove();
        link.classList.add('active');
      } else if (innerHeight + window.scrollY >= document.body.scrollHeight) {
        remove();
        arr[arr.length - 1].classList.add('active');
      }
    });
  });
};
scrollspy();
