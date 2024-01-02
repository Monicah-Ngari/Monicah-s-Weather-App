function refreshWeather(response) {
  let cityTempElement = document.querySelector("#current-temp");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let cloudDesc = document.querySelector("#descrp");
  let currentHumidity = document.querySelector("#climate");

  cloudDesc.innerHTML = response.data.condition.description;
  currentHumidity.innerHTML = `${response.data.temperature.humidity}%`;
  console.log(response.data);
  cityElement.innerHTML = response.data.city;
  cityTempElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "1a2a473db97faf41f0088oe8t98271ff";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  searchCity(searchInput.value);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSearchSubmit);

searchCity("Nairobi");
