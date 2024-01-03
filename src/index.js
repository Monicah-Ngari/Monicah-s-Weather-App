function refreshWeather(response) {
  let cityTempElement = document.querySelector("#current-temp");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let cloudDesc = document.querySelector("#descrp");
  let currentHumidity = document.querySelector("#climate");
  let windSpeed = document.querySelector("#wind");
  let currentDay = document.querySelector("#current-time");
  let date = new Date(response.data.time * 1000);
  let icon = document.querySelector("#weather-icon");

  console.log(response.data);

  cityElement.innerHTML = response.data.city;
  cityTempElement.innerHTML = Math.round(temperature);
  cloudDesc.innerHTML = response.data.condition.description;
  currentHumidity.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeed.innerHTML = `${response.data.wind.speed}km/h`;
  currentDay.innerHTML = currentDate(date);
  icon.innerHTML = response.data.condition.icon;
}

function currentDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Teusday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[date.getDay()];
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours} :${minutes}`;
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
