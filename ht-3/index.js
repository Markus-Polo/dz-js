const renderPlanets = function(planets) {
  const planetsCharacteristics = [
    "name", "rotation_period", "orbital_period",
    "diameter", "climate", "gravity",
    "terrain", "surface_water", "population",
    "created", "edited"];
  const dashCaseToHumanReadable = item => {
    return item.charAt(0).toUpperCase() + item.slice(1).replace('_', ' ');
  }
  const body = document.querySelector('body');
  const table = document.createElement('table');
  const tableRow = document.createElement('tr');
  table.append(tableRow);
  planetsCharacteristics.forEach(item => {
    const th = document.createElement('th');
    th.innerHTML = dashCaseToHumanReadable(item);
    tableRow.append(th);
    
  })
  planets.forEach(element => {
    const tableRow = document.createElement('tr');
    planetsCharacteristics.forEach((item) =>{
      const tableCall = document.createElement('td');
      tableCall.innerHTML = element[item];
      tableRow.append(tableCall);
    })
    table.append(tableRow);
  });
  table.classList.add("planets-table");
  let selectedTd;
  table.addEventListener('click', (event) => {
    const tagName = event.target;
    if(event.target.tagName === 'TD') {
      event.target.classList.add("planets-table-selected-td")};
      highlight(tagName);
  })
  function highlight(select) {
    if (selectedTd) {
      selectedTd.classList.remove("planets-table-selected-td");
    }
    selectedTd = select;
    selectedTd.classList.add("planets-table-selected-td");
  };
  body.append(table);
}

const renderButton = document.querySelector('#button');
renderButton.addEventListener("click", async () => {
  try {
    renderButton.setAttribute('disabled', 'true');
    const res = await fetch('https://swapi.dev/api/planets');
    const {results: planets} = await res.json();
    renderPlanets(planets);
  } catch(error) {
    alert(error.message);
  } finally {
    renderButton.removeAttribute('disabled');
  }
});
