const express = require('express');
const router = express.Router();

const Payment = require('../controlers/payment')

router.get('/', (req, res, next) => Payment.getAllPayments(req, res, next));

router.post('/', (req, res, next) => Payment.setPayment(req, res, next));

router.get('/:paymentId', (req, res, next) => Payment.getPayment(req, res, next));

router.put('/:paymentId/accept', (req, res, next) => Payment.acceptPayment(req, res, next));

router.put('/:paymentId/return', (req, res, next) => Payment.returnPayment(req, res, next));

router.delete('/:paymentId', (req, res, next) => Payment.declinePayment(req, res, next));

module.exports = router;