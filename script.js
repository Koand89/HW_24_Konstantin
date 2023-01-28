

(()=>{

$('#weather').on('click', () => {
    const city = $('#search').val();
    const request = 'http://api.openweathermap.org/geo/1.0/direct?q=' + city + '&limit=1&appid=fc41099d3d362eb0a515e21884820e9e'
    $.ajax(request, {method:'GET',
        success: (data) => {
            let lat = data[0].lat;
            let lon = data[0].lon;
            const requestWeather = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat +
                '&lon=' + lon + '&appid=fc41099d3d362eb0a515e21884820e9e'+'&units=metric'
            $requestWeather(requestWeather);
        },
        error: () => {
            alert('Invalid input');
        }
    });
    const $requestWeather = (requestWeather) => {
    $.ajax(requestWeather, {
        method: 'GET',
        success: (dataWeather) => {
           let temp = dataWeather.main.temp;
           console.log('Location temperature: ' + Math.round(temp));
        },
        error: () => {
            alert('Invalid input');
        }
    });
    }
});

})();