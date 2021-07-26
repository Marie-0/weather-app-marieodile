// When searching for a city - shows temperature

function search(event) {
  event.preventDefault();
  let currentcity = document.querySelector("#city");
  let input = document.querySelector("#floatingInput");
  currentcity.innerHTML = input.value;
  searchCity(input.value);
}
function searchCity(city) {
  let apiKey = "8f6b1ec5dcfe08b27439b846a9c1473d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}`).then(showTemperature);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureDisplay = document.querySelector(".current-temperature");
  temperatureDisplay.innerHTML = ` •  ${temperature} °C`;
}

// Current City Button
function showCurrentTemperature(response) {
  let city = response.data.name;
  let cityDisplay = document.querySelector("#city");
  cityDisplay.innerHTML = `${city}`;
  let temperature = Math.round(response.data.main.temp);
  let temperatureDisplay = document.querySelector(".current-temperature");
  temperatureDisplay.innerHTML = ` •  ${temperature} °C`;
}

function currentCityPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "8f6b1ec5dcfe08b27439b846a9c1473d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
  axios.get(`${apiUrl}`).then(showCurrentTemperature);
}
function getCurrentPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(currentCityPosition);
}

let currentCityButton = document.querySelector(".currentCityButton");
currentCityButton.addEventListener("click", getCurrentPosition);

let now = new Date();
let currentdate = document.querySelector(".current-date");
let date = now.getDate();
let hour = now.getHours();
let minutes = now.getMinutes();

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];
currentdate.innerHTML = `${month},  ${date} • ${hour}:${minutes}`;
