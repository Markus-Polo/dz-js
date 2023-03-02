const renderPlanets = function(planets) {
  const planetsCharacteristics = [
    "name", "rotation_period", "orbital_period",
    "diameter", "climate", "gravity",
    "terrain", "surface_water", "population",
    "created", "edited"];
  const dashCaseToHumanReadable = item => {
    return item.charAt(0).toUpperCase() + item.slice(1).replace('_', ' ');
  }
  const createTableHeading = (headingArr) => {
    return headingArr.map((item) => {
      return `<th> 
          ${dashCaseToHumanReadable(item)} 
        </th>`
    }).join('')
  }
  const body = document.querySelector('body');
  body.insertAdjacentHTML('beforeEnd', `
    <table class='planets-table'>
      <tbody>
        <tr> 
          ${createTableHeading(planetsCharacteristics)} 
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
    renderButton.setAttribute('disabled', true)
    const res = await fetch('https://swapi.dev/api/planets');
    const {results: planets} = await res.json();
    renderPlanets(planets)
  } catch(error) {
    alert(error.message)
  } finally {
    renderButton.removeAttribute('disabled')
  }
});

