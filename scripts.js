//function to get current date
$(document).ready(function(){
    $("#hello2").text(moment().format("L"));
});

//function to convert temperature to Fahrenheit
function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputFahrenheit").innerHTML=((valNum-273.15)*1.8)+32;
  }


document.getElementById("cityForm").addEventListener("submit",function(event) {
    event.preventDefault();
    var cityName=document.getElementById("cityNameInput").value;
    if(!cityName) {
        alert("Please enter the name of a city.");
    } else {
        document.getElementById("cityName").innerText=cityName;

        var requestUrl="http://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=befebd5c21afa73e074ce366b9c1c094";

        fetch(requestUrl).then(function(response) {
            if(!response.ok) {
                alert("No information found for "+cityName);
            } 
            return response.json();
            
        }).then(function(data) {
            console.log(data);

            document.getElementById("currentTemperature").innerText=data.main.temp;
            document.getElementById("currentHumidity").innerText=data.main.humidity;
            document.getElementById("currentWind").innerText=data.wind.speed;
            document.getElementById("currentIndex").innerText=data.main.humidity;
        })

    }

});