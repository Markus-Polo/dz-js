function debounce (func, ms) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout (() => {
      func.apply(this, args)
    }, ms);
  }
};

function search() {
  const baseUrl = 'https://pixabay.com/api/';
  const apiKey = '34969259-1340cd29ea32dd0019bae9b64';
  const imagesWrapper = document.querySelector('.images-wrapper');
  const searchInput = document.getElementById("search-input");
  let pageN;
  let searchValue;
  let images;
  function removeMarkup () {
    imagesWrapper.replaceChildren();
    document.querySelector(`[data-search='res']`)?.remove();
  };
  searchInput.addEventListener('input', debounce (() => {
    searchValue = searchInput.value.trim().replaceAll( ' ', "+" );
    if(searchValue) {
      pageN = 1;
      removeMarkup();
      fetchImages();
    }
  }, 1500));
  function fetchImages() {
    const res = fetch(`${baseUrl}?key=${apiKey}&q=${searchValue}&image_type=photo&page=${pageN}&per_page=4`)
    .then(res => res.json())
    .then(res => images = res.hits)
    .then(() => addMarkup())
    .catch(error => myError(error));
  };
  function addMarkup () {
    if (images.length === 0) {
      const error = 'Ops :(';
      myError(error)
    } else {
      images.forEach(element => {
        imagesWrapper.insertAdjacentHTML('beforeEnd',
        `<li>
          <figure class='res-img'>
            <img src="${element.webformatURL}">
            <figcaption class='tags-img'>${element.tags}</figcaption>
          </figure>
        </li>`
        );
      });
    };
    const target = imagesWrapper.lastChild;
    observer(target);
  };
  function myError(error) {
    imagesWrapper.insertAdjacentHTML('beforebegin', 
      `
      <h2 data-search='res' class='title-2'>
      ${error}
      </h2>
      `
    )
  };
  function observer(target) {
    const options = {
      root: null,
      threshold: 1.0};
    const callback = (entries, observer) => {
      if (entries[0].isIntersecting) {
        pageN++;
        fetchImages();
        observer.disconnect();
      };
    };
    let observer = new IntersectionObserver(callback, options);
    if (target) {
      observer.observe(target);
    };
  };
};
search();
