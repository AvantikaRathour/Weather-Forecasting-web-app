const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '34a33d34ffmshaf2fa478f3254f6p19e0fdjsn4e5b0d43c29a',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather=(city)=>{
	cityName.innerHTML=city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response)=> {
		console.log(response)


		temp.innerHTML = response.temp
		temp2.innerHTML = response.temp
		temp3.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity2.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_speed2.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset

	})
	.catch(err => console.error(err));
}
submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather(city.value)
})
getWeather("Delhi")
const getWeather1=(city)=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
	.then(response => response.json())
	.then((response)=> {
		console.log(response)


		temp3.innerHTML = response.temp
		feels_like3.innerHTML = response.feels_like
		humidity3.innerHTML = response.humidity
		min_temp3.innerHTML = response.min_temp
		max_temp3.innerHTML = response.max_temp
		wind_speed3.innerHTML = response.wind_speed
		wind_degrees3.innerHTML = response.wind_degrees
		sunrise3.innerHTML = response.sunrise
		sunset3.innerHTML = response.sunset

	})
	.catch(err => console.error(err));

}
getWeather1("Delhi")
const getWeather2=(city)=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
	.then(response => response.json())
	.then((response)=> {
		console.log(response)


		temp4.innerHTML = response.temp
		feels_like4.innerHTML = response.feels_like
		humidity4.innerHTML = response.humidity
		min_temp4.innerHTML = response.min_temp
		max_temp4.innerHTML = response.max_temp
		wind_speed4.innerHTML = response.wind_speed
		wind_degrees4.innerHTML = response.wind_degrees
		sunrise4.innerHTML = response.sunrise
		sunset4.innerHTML = response.sunset

	})
	.catch(err => console.error(err));

}
getWeather2("Mumbai")

const getWeather3=(city)=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore', options)
	.then(response => response.json())
	.then((response)=> {
		console.log(response)
        temp5.innerHTML = response.temp
		feels_like5.innerHTML = response.feels_like
		humidity5.innerHTML = response.humidity
		min_temp5.innerHTML = response.min_temp
		max_temp5.innerHTML = response.max_temp
		wind_speed5.innerHTML = response.wind_speed
		wind_degrees5.innerHTML = response.wind_degrees
		sunrise5.innerHTML = response.sunrise
		sunset5.innerHTML = response.sunset

		

	})
	.catch(err => console.error(err));

}
getWeather3("Bangalore")

const getWeather4=(city)=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Ghaziabad', options)
	.then(response => response.json())
	.then((response)=> {
		console.log(response)
        temp6.innerHTML = response.temp
		feels_like6.innerHTML = response.feels_like
		humidity6.innerHTML = response.humidity
		min_temp6.innerHTML = response.min_temp
		max_temp6.innerHTML = response.max_temp
		wind_speed6.innerHTML = response.wind_speed
		wind_degrees6.innerHTML = response.wind_degrees
		sunrise6.innerHTML = response.sunrise
		sunset6.innerHTML = response.sunset

		

	})
	.catch(err => console.error(err));

}
getWeather4("Ghaziabad")

const getWeather5=(city)=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options)
	.then(response => response.json())
	.then((response)=> {
		console.log(response)
		temp7.innerHTML = response.temp
		feels_like7.innerHTML = response.feels_like
		humidity7.innerHTML = response.humidity
		min_temp7.innerHTML = response.min_temp
		max_temp7.innerHTML = response.max_temp
		wind_speed7.innerHTML = response.wind_speed
		wind_degrees7.innerHTML = response.wind_degrees
		sunrise7.innerHTML = response.sunrise
		sunset7.innerHTML = response.sunset
		

	})
	.catch(err => console.error(err));

}
getWeather5("Lucknow")

