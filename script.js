function updateWeatherData(response) {
  let temperatureElement = document.querySelector("#weather-app-temperature");
  let temperature = response.data.temperature.current;
  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "ff7aoa188320d523t26fbb340bccff49";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeatherData);
}

function handleSearchSubmit(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#weather-app-city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
