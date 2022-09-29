const apiKey = '31b7dec44d4017661c9be2f158f9ae70';
document.getElementById("mainHeader").style = mainHeader;
document.getElementById("zipcodeInput").style = zipcodeInput;
let getWeatherButton = document.getElementById("getWeather");
let temperatureText = document.getElementById("temperatureText");
let cityText = document.getElementById("cityText");
let fahreneheitText = document.getElementById("fahrenheit");
let celsiusText = document.getElementById("celsius");
let kelvin = document.getElementById("kelvin");
let currentCondition = document.getElementById("currentCondition");
let conditions = document.getElementById("conditions");



// function that validates the zipcode and if not valid, returns an alert

const zipcodeValidation = function () {
    zipcode = document.getElementById("zipcodeInput").value;
    if (zipcode.length === 5 && isNaN(zipcode) === false) {
        console.log("valid zip")
        return true;
    } else {
        console.log("invalid zip");
        alert("You have entered an INVALID ZIPCODE. Please try again.")
    }
};



async function getWeatherData() {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=${apiKey}&units=imperial`);
        console.log(response.data);
        let data = response.data;
        currentState(data)
    } catch (error) {
        console.error(error);
    }
}

// add event listener that runs the zipcodeValidation function and if it passes, then runs the getWeatherData function API call

getWeatherButton.addEventListener("click", () => {
    if (zipcodeValidation()) {
        getWeatherData();
    }
});

// function that updates the current state of the display

const currentState = function (data) {
    let temperature = Math.round(data.main.temp);
    let city = data.name;
    let celsius = Math.round(temperature - 273);
    let fahreneheit = Math.round(celsius * 1.8 + 32);
    let condition = data.weather[0].description;
    let otherInfo = data.weather[0].icon;

    // initial page view before weatherData is returned and after a refresh

    mainHeader.display = "block"; // fills the entire line and nothing can be displayed to the left or right side
    zipcodeInput.display = "block";
    getWeatherButton.style.display = "block";

    // take values and populate into the display

    cityText.style.display = "block";
    cityText.textContent = city;
    temperatureText.style.display = "block";
    currentCondition.style.display = "block";
    conditions.textContent = condition;
    kelvin.textContent = `${temperature} K`;
    fahreneheitText.textContent = `${fahreneheit} F`;
    celsiusText.textContent = `${celsius} C`;

};