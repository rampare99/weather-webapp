const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoicmFtcGFyZTk5IiwiYSI6ImNrZmlvbmlmNjBoMWEyeWxkNHJwemdiOTYifQ._pICJNdk-DMFaoy7P7QnFg&limit=1'

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to conect to location services!')
        } else if (body.features.length === 0) {
            callback('Unable to find location. Please try another search.')
        } else {
            const {center, place_name:location} = body.features[0]
            callback(undefined, {latitude: center[1], longitude: center[0], location})
        }
    })
}

module.exports = geocode