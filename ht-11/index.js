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
  const body = document.querySelector('.img-wrapper');
  const searchInput = document.getElementById("search-input");
  let pageN = 1;
  let searchValue;

  function removeMarkup () {
    Array.from(document.querySelectorAll(`[data-search='res']`)).forEach(element => {
      element.remove();
    });
  };

  searchInput.addEventListener('input', debounce (() => {
    searchValue = searchInput.value.replace( / /g, "+" );
    if(searchValue) {
      removeMarkup();
      fetchFunc();
    }
  }, 1500));

  function fetchFunc() {
    const res = fetch(`https://pixabay.com/api/?key=34969259-1340cd29ea32dd0019bae9b64&q=${searchValue}&image_type=photo&page=${pageN}&per_page=4`)
    .then(res => res.json())
    .then(res => {
      const imageArr = Array.from(res.hits);
      console.log(imageArr);
      addMarkup (imageArr);
    });
  };

  function addMarkup (arr) {
    if (arr.length === 0) {
      body.insertAdjacentHTML('beforebegin', 
      `
      <h2 data-search='res' class='title-2'>
      Oops, nothing was found
      </h2>
      `
      )
    };
    arr.forEach(element => {
      body.insertAdjacentHTML('beforeEnd',
      `<figure data-search='res' class='res-img'>
        <img src="${element.webformatURL}">
        <figcaption class='tags-img'>${element.tags}</figcaption>
      </figure>`
      )
    });
  };

  window.addEventListener('scroll', () => {
    if ((innerHeight + window.scrollY) + 50 >= document.body.scrollHeight) {
      pageN++
      fetchFunc();
    };
  });
};
search()