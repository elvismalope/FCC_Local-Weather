
$(document).ready(function(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(function(position){
				console.log("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
				$.getJSON("https://fcc-weather-api.glitch.me/api/current?" + "lat=" + position.coords.latitude + "&lon=" + position.coords.longitude,function(json) {
					console.log(json);
					$("#locationName").html(json.name + ", " + json.sys.country);
					$("#temperature").html(json.main.temp);
					$("#weatherDescription").html(json.weather[0].main);
					$("#weatherIcon").html('<img id="weatherIcon" src="' + json.weather[0].icon + '" alt="' + json.weather[0].description + '">');
					$("#unit").html("C").on('click', function(){
							var result;
							if ($("#unit").html() == "C"){
								result = ($("#temperature").html() *(9/5)) + 32;
								$("#unit").html("F");
							}else {
								result = ($("#temperature").html() - 32) / (9/5);
								$("#unit").html("C");
							}
						  $("#temperature").html(result.toFixed(2));
					});
				})
		});
	}
});
