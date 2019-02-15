const express = require('express');
const request = require('request');
const urlMoscow = 'https://api.darksky.net/forecast/7be47b8a68e8780cb41c21f8d7430e44/55.751244,37.618423';
const urlParis = 'https://api.darksky.net/forecast/7be47b8a68e8780cb41c21f8d7430e44/48.864716,2.349014';
const urlMadrid = 'https://api.darksky.net/forecast/7be47b8a68e8780cb41c21f8d7430e44/40.416775,-3.703790';
const router = express.Router();

router.get('/:cityId', (req, res, next) => {
    const id = req.params.cityId;
    switch (id) {
        case '1':
            request({
                method: 'GET',
                url: urlMoscow
            }, function (error, response, body) {
                return res.status(200).json({
                    city: 'Moscow',
                    temperature: (JSON.parse(body).hourly.data[0].temperature - 32) / 1.8,
                    humidity: JSON.parse(body).hourly.data[0].humidity,
                    windSpeed: JSON.parse(body).hourly.data[0].windSpeed
                });
            });
            break;
        case '2':
            request({
                method: 'GET',
                url: urlParis
            }, function (error, response, body) {
                return res.status(200).json({
                    city: 'Paris',
                    temperature: (JSON.parse(body).hourly.data[0].temperature - 32) / 1.8,
                    humidity: JSON.parse(body).hourly.data[0].humidity,
                    windSpeed: JSON.parse(body).hourly.data[0].windSpeed
                });
            });
            break;
        case '3':
            request({
                method: 'GET',
                url: urlMadrid
            }, function (error, response, body) {
                return res.status(200).json({
                    city: 'Madrid',
                    temperature: (JSON.parse(body).hourly.data[0].temperature - 32) / 1.8,
                    humidity: JSON.parse(body).hourly.data[0].humidity,
                    windSpeed: JSON.parse(body).hourly.data[0].windSpeed
                });
            });
            break;
        default:
            return res.status(404).json({
                error: 'Unknown id'
            });
    }
});

module.exports = router; 