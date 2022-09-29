const apiKey = '31b7dec44d4017661c9be2f158f9ae70';
document.getElementById("mainHeader").style = mainHeader;
document.getElementById("zipcodeInput").style = zipcodeInput;
let getWeatherButton = document.getElementById("getWeather");
let temperatureText = document.getElementById("temperatureText");
let cityText = document.getElementById("cityText");
let fahreneheitText = document.getElementById("fahrenheit");
let celsiusText = document.getElementById("celsius");
let kelvin = document.getElementById("kelvin");


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
        let weatherData = response.data;
        currentState(weatherData)
    } catch (error) {
        console.error(error);
    }
}

getWeatherButton.addEventListener("click", () => {
    if (zipcodeValidation()) {
        getWeatherData();
    }
});


const currentState = function() {
    let city = data.name;
    let kelvin = Math.round(celsius + 273.15);
    let fahreneheit = Math.round(data.main.temp);
    let celsius = Math.round((fahreneheit-32) / 1.8);
    let condition = data.weather[0].description;
    let otherInfo = data.weather[0].icon;

    console.log(currentState);

}


// initial page view before weatherData is returned and after a refresh

mainHeader.display = "block"; // fills the entire line and nothing can be displayed to the left or right side
zipcodeInput.display = "block";
getWeatherButton.style.display = "block";

// values to populate 