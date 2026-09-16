// Our data (you can change names, ages, cities later)
const people = [
  { name: "Anna", age: 28, city: "Tallinn" },
  { name: "Markus", age: 34, city: "Tartu" },
  { name: "Liisa", age: 22, city: "Narva" },
  { name: "Karl", age: 30, city: "Pärnu" },
  { name: "Mari", age: 25, city: "Tallinn" }
];

let currentData = [...people];

// Render table rows
function renderTable(data) {
  const tbody = document.getElementById("dataTableBody");
  tbody.innerHTML = "";

  data.forEach(person => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = person.name;

    const ageCell = document.createElement("td");
    ageCell.textContent = person.age;

    const cityCell = document.createElement("td");
    cityCell.textContent = person.city;

    row.appendChild(nameCell);
    row.appendChild(ageCell);
    row.appendChild(cityCell);

    tbody.appendChild(row);
  });
}

// Apply filters
function applyFilters() {
  const cityFilter = document.getElementById("cityFilter").value;
  const ageFilter = document.getElementById("ageFilter").value;

  let filtered = [...people];

  if (cityFilter !== "all") {
    filtered = filtered.filter(person => person.city === cityFilter);
  }

  if (ageFilter === "over25") {
    filtered = filtered.filter(person => person.age > 25);
  }

  currentData = filtered;
  renderTable(currentData);
}

// Event listeners
document.getElementById("cityFilter").addEventListener("change", applyFilters);
document.getElementById("ageFilter").addEventListener("change", applyFilters);

document.getElementById("sortByName").addEventListener("click", () => {
  currentData.sort((a, b) => a.name.localeCompare(b.name));
  renderTable(currentData);
});

document.getElementById("sortByAge").addEventListener("click", () => {
  currentData.sort((a, b) => a.age - b.age);
  renderTable(currentData);
});

// Initial render
renderTable(currentData);
