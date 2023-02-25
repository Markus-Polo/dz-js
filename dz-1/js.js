
const users = [
  {name: 'User-1'},
  {name: 'User-2'},
  {name: 'User-3'},
  {name: 'User-4'},
  {name: 'User-5'},
  {name: 'User-6'}
]
  // const div = document.createElement('div');
  // div.innerText = 'text'
  // 
// function renderUsers(users) {
//   const list = document.createElement('ul');
//   const body = document.querySelector('body');
//   users.forEach(function(user) {
//     const item = document.createElement('li');
//     item.innerHTML = user.name;
//     list.append(item);
//   })
//   body.append(list);
//   console.log(body)
// }
// function renderUsers(users) {
//   const body = document.querySelector('body');
//   body.insertAdjacentHTML('afterbegin',
//   `<ul>
//   ${users.map(function (item) {
//     return `<li> ${item.name} </li>`
//   }).join('')}
//   </ul>`)
// }

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





// const button = document.querySelector('#button')
// button.addEventListener("click", () => {
//   fetch('https://swapi.dev/api/people')
//   .then((res) => res.json())
//   .then((data) => renderUsers(data.results))
// });







