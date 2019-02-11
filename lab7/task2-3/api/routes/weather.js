const express = require('express');
const request = require('request');
const urlMoscow = 'http://dataservice.accuweather.com/currentconditions/v1/294021?apikey=fh6xN1xWiKc9XCYzLibhO7yQng3p2ijA&language=ru-ru';
const urlParis = 'http://dataservice.accuweather.com/currentconditions/v1/623?apikey=fh6xN1xWiKc9XCYzLibhO7yQng3p2ijA&language=ru-ru';
const urlMadrid = 'http://dataservice.accuweather.com/currentconditions/v1/308526?apikey=fh6xN1xWiKc9XCYzLibhO7yQng3p2ijA&language=ru-ru';
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
                    temperature: JSON.parse(body)[0].Temperature.Metric.Value,
                    humidity: 54,
                    wind: {
                        direction: "NW",
                        speed: 2.4
                    }
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
                    body: JSON.parse(body)[0].Temperature.Metric.Value,
                    humidity: 71,
                    wind: {
                        direction: "SW",
                        speed: 3.4
                    }
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
                    body: JSON.parse(body)[0].Temperature.Metric.Value,
                    humidity: 84,
                    wind: {
                        direction: "SE",
                        speed: 1.2
                    }
                });
            });
            break;
        default:
            return res.status(500).json({
                error: 'Unknown id'
            });
    }
});

module.exports = router;