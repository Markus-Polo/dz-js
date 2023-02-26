const renderUsers = function(users) {
  const body = document.querySelector('body');
  body.insertAdjacentHTML('afterbegin',
  `<ul>
    ${users.map(function ({name}) {
      return `<li> ${name} </li>`
    }).join('')}
  </ul>`)
}
const button = document.querySelector('#button')
button.addEventListener("click", async () => {
  const res = await fetch('https://swapi.dev/api/people');
  const {results: users} = await res.json();
  renderUsers(users)
});
