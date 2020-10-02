const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=a5fb0b749d0d35472fa55e9d2c365e25&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather services.')
        } else if (body.error) {
            console.log(url)
            callback('Unable to find location.')
        } else {
            const {temperature:temp, feelslike:feel, weather_descriptions:time} = body.current
            callback(undefined, time[0] + '. It is currently ' + temp + ' degrees. It feels like ' + feel + ' degrees.')
        }
    })
}

module.exports = forecast