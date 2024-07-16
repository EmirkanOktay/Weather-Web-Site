let input = document.querySelector("#search")
let key = "488400d8dc8ed03b97f50d625dbcb0e1"
const apiUrl = `https://api.openweathermap.org/data/2.5/`

let cityName = document.querySelector(".city-name p");
let cityTemp = document.querySelector(".write-weather p")
let weatherType = document.querySelector(".weather-type p")
let moisure = document.querySelector(".write-weather-moisture p")

input.addEventListener("input",()=>{
let query =  `${apiUrl}weather?q=${input.value.trim().toLowerCase()}&appid=${key}&units=metric&lang=en`
fetch(query)
.then(weather => weather.json())
.then(data=> {
cityName.innerHTML = `${data.name} ${data.sys.country}`
cityTemp.innerHTML = `${data.main.temp.toFixed(1)} °C`
weatherType.innerHTML = `${data.weather[0].main}`

})
})

