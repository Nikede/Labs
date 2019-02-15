const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const moment = require('moment');
moment().format();

const Payment = require('../models/payment');

router.get('/', (req, res, next) => {
    Payment.find().exec().then(docs => {
        res.status(201).json(docs);
        //console.log(moment().diff(moment('2019-02-15T04:00:42+03:00'), 'minutes'));
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    });
});

router.post('/', (req, res, next) => {
    if (req.body.account === undefined || req.body.sum === undefined || req.body.description === undefined) {
        return res.status(500).json({
            error: "All fields are required (account, sum, description)"
        });
    }
    const payment = new Payment({
        _id: new mongoose.Types.ObjectId(),
        account: req.body.account,
        sum: req.body.sum,
        description: req.body.description,
        date: moment().format(),
        accepted: false
    });
    payment.save().then(result => {
        console.log(result);
        res.status(201).json({
            createdPayment: result
        });
    })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

router.get('/:paymentId', (req, res, next) => {
    const id = req.params.paymentId;
    Payment.findById(id).exec().then(doc => {
        console.log(doc);
        if (doc) {
            res.status(404).json(doc);
        } else {
            res.status(404).json({
                message: "Not found"
            });
        }
    })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

router.get('/:paymentId/accept', (req, res, next) => {
    const id = req.params.paymentId;
    Payment.findById(id).exec().then(doc => {
        console.log(doc);
        if (doc) {
            res.status(404).json({
                hui: 'hui'
            });
        } else {
            res.status(404).json({
                message: "Not found"
            });
        }
    })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

router.put('/:mailingId', (req, res, next) => {
    const id = req.params.mailingId;
    const updateOps = {};
    for (const ops of req.body) {
        if (ops.propName !== 'messageId')
            updateOps[ops.propName] = ops.value;
    }
    Mailing.update({ _id: id }, { $set: updateOps })
        .exec()
        .then(result => {
            console.log(result);
            if (result.ok === 1)
                res.status(200).json(result);
            else
                res.status(500).json({
                    error: "Mailing didn't update, check your \"prorName\"s"
                });
        })
        .catch(err => {
            console.log(result);
            res.status(500).json({
                error: err
            });
        });
});

router.delete('/:mailingId', (req, res, next) => {
    const id = req.params.mailingId;
    Mailing.remove({
        _id: id
    })
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        })
});

module.exports = router;