const renderPlanets = function(planets) {
  const planetsCharacteristics = [
    "name", "rotation_period", "orbital_period",
    "diameter", "climate", "gravity",
    "terrain", "surface_water", "population",
    "created", "edited"]
  const title_1 = document.querySelector('#title_1');
  title_1.insertAdjacentHTML('afterEnd', `
  <table class='palnets_table'>
    <tbody>
      <tr> ${planetsCharacteristics.map((item) => {
          return `<th> 
              ${item.charAt(0).toUpperCase() + item.slice(1).replace('_', ' ')} 
            </th>`
        }).join('')} 
      </tr>
      ${ planets.map((element) => {
          return `<tr> 
            ${planetsCharacteristics.map(item => {
              return `<td> ${element[item]} </td>`
            }).join('')}
          </tr>`
        }).join('')
      }
    </tbody>
  </table>`)
}

const renderButton = document.querySelector('#button')
renderButton.addEventListener("click", async () => {
  try {
    renderButton.setAttribute('disabled', 'true')
    const res = await fetch('https://swapi.dev/api/planets');
    const {results: planets} = await res.json();
    renderPlanets(planets)
    renderButton.removeAttribute('disabled')
  } catch {
    alert('error')
    renderButton.removeAttribute('disabled')
  } finally {
    renderButton.removeAttribute('disabled')
  }
});

