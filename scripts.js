//function to get current date
$(document).ready(function(){
    $("#hello2").text(moment().format("L"));
});

//function to convert temperature to Fahrenheit
function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputFahrenheit").innerHTML=((valNum-273.15)*1.8)+32;
    
  }


//function to get current weather
document.getElementById("cityForm").addEventListener("submit",function(event) {
    event.preventDefault();
    var cityName=document.getElementById("cityNameInput").value;
    
    if(!cityName) {
        alert("Please enter the name of a city.");
    } else {
        document.getElementById("cityName").innerText=cityName;

        var requestUrl="http://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=befebd5c21afa73e074ce366b9c1c094";
        var fiveDayRequestUrl="http://api.openweathermap.org/geo/1.0/direct?q="+cityName+"&limit=5&appid=befebd5c21afa73e074ce366b9c1c094";
        

        fetch(requestUrl).then(function(response) {
            if(!response.ok) {
                alert("No information found for "+cityName);
            } 
            return response.json();
            
        }).then(function(data) {
            console.log(data);

            document.getElementById("currentTemperature").innerText=temperatureConverter(data.main.temp);
            document.getElementById("currentHumidity").innerText=data.main.humidity;
            document.getElementById("currentWind").innerText=data.wind.speed;
           // document.getElementById("currentIndex").innerText=data.main.uvi;

        })

            
        fetch(fiveDayRequestUrl).then(function(response) {
            return response.json();
            }).then(function(data) {
            console.log(data);

        

        var latitude=data[0].lat;
        var longitude=data[0].lon;

        var forecastRequestUrl="https://api.openweathermap.org/data/2.5/onecall?lat="+latitude+"&lon="+longitude+"&appid=befebd5c21afa73e074ce366b9c1c094";
        
        fetch(forecastRequestUrl).then(function(response) {
            return response.json();
            }).then(function(data) {

            console.log(data.daily);

            
            var forecast = ["0","1","2","3","4"];
            console.log(forecast.length);

            for(var i=0; i<data.daily.length; i++) {

                console.log("Temp:"+data.daily[i]);

            document.getElementById("forecastWeather1").innerText=data.daily.temp;
            document.getElementById("forecastWeather2").innerText=data.daily.temp;
            document.getElementById("forecastWeather3").innerText=data.daily.temp;
            document.getElementById("forecastWeather4").innerText=data.daily.temp;
            document.getElementById("forecastWeather5").innerText=data.daily.temp;
            
                
                
                
            }

    })
})
    }
});



/*document.getElementById("cityForm").addEventListener("submit",function(event) {
    event.preventDefault();
    var cityName=document.getElementById("cityNameInput").value;
    if(!cityName) {
        alert("Please enter the name of a city.");
    } else {
        document.getElementById("cityName").innerText=cityName;

        var requestUrl="http://api.openweathermap.org/geo/1.0/direct?q"+cityName+"&limit=1&appid=befebd5c21afa73e074ce366b9c1c094";

        fetch(requestUrl).then(function(response) {
            if(!response.ok) {
                alert("No information found for "+cityName);
            } 
            return response.json();
            
        }).then(function(data) {
            
            var latitude=data[0].lat;
            var longitude=data[0].lon;

            var forecastRequestURL="https://api.openweathermap.org/data/2.5/onecall?lat="+latitude+"&lon="+longitude+"&appid=befebd5c21afa73e074ce366b9c1c094";

            fetch(forecastRequestURL).then(function(response) {

                if(!response.ok) {
                    alert("No forecast found for "+cityName);
                } 
                
                return response.json();
            }).then(function(data){
                console.log(data);
            });
        })

    }

});
*/
