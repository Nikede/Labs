const express = require('express');
const router = express.Router();

router.get('/:cityId', (req, res, next) => {
    const id = req.params.cityId;
    switch (id) {
        case '1':
            return res.status(200).json({
                city: 'Moscow',
                temperature: -3,
                humidity: 54,
                wind: {
                    direction: "NW",
                    speed: 2.4
                }
            });
        case '2':
            return res.status(200).json({
                city: 'Paris',
                temperature: 6,
                humidity: 71,
                wind: {
                    direction: "SW",
                    speed: 3.4
                }
            });
        case '3':
            return res.status(200).json({
                city: 'Madrid',
                temperature: 15,
                humidity: 84,
                wind: {
                    direction: "SE",
                    speed: 1.2
                }
            });
        default:
            return res.status(404).json({
                error: 'Unknown id'
            });
    }
});

module.exports = router;