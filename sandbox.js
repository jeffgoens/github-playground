const apiKey = '31b7dec44d4017661c9be2f158f9ae70';
let getWeatherButton = document.getElementById("getWeather");




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
        // const weatherData = response.data;
    } catch (error) {
        console.error(error);
    }
}

getWeatherButton.addEventListener("click", () => {
    if (zipcodeValidation()) {
        getWeatherData();
    }
});
