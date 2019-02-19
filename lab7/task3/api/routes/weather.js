const express = require('express');
const request = require('request');
const apiUrl = 'https://api.darksky.net/forecast/';
const apiKey = '7be47b8a68e8780cb41c21f8d7430e44';
const coordinates = [
    {
        longitude: 55.751244,
        latitude: 37.618423
    },
    {
        longitude: 48.864716,
        latitude: 2.349014
    },
    {
        longitude: 40.416775,
        latitude: -3.703790
    }
];
const router = express.Router();

router.get('/:cityId', (req, res, next) => {
    if (typeof req.params.cityId !== 'number' || req.params.cityId > coordinates.length || req.params.cityId < 1) {
        return res.status(404).json({
            error: 'Unknown id'
        });
    }
    request({
        method: 'GET',
        url: getUrl(req.params.cityId)
    }, function (error, response, body) {
        return res.status(200).json({
            city: JSON.parse(body).timezone,
            temperature: (JSON.parse(body).hourly.data[0].temperature - 32) / 1.8,
            humidity: JSON.parse(body).hourly.data[0].humidity,
            windSpeed: JSON.parse(body).hourly.data[0].windSpeed
        });
    });
});

function getUrl(cityId) {
    return apiUrl + apiKey + '/' + coordinates[cityId - 1].longitude + ',' + coordinates[cityId - 1].latitude;
}

module.exports = router; 