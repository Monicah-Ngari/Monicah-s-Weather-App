function myCitty(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#weather-city");
  cityElement.innerHTML = searchInput.value;
}

let searchForm = document.querySelector("#search-form-input");
searchForm.addEventListener("submit", myCitty);
