const mongoose = require('mongoose');
const moment = require('moment');
moment().format();

const Payment = require('../models/payment');

function getAllPayments(req, res, next) {
    Payment.find().exec().then(docs => {
        res.status(201).json(docs);
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    });
};

function getPayment(req, res, next) {
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
}

function setPayment(req, res, next) {
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
        accepted: false,
        returned: false
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
}

function acceptPayment(req, res, next) {
    const id = req.params.paymentId;
    Payment.findById(id).exec().then(doc => {
        console.log(doc);
        if (doc) {
            if (doc.accepted) {
                return res.status(500).json({
                    err: "Payment already accepted"
                });
            }
            if (moment().diff(moment(doc.date), 'minutes') >= 1) {
                return res.status(500).json({
                    err: "More than one minute has passed since making the payment"
                });
            } else {
                Payment.update({ _id: id }, { accepted: true })
                    .exec()
                    .then(result => {
                        console.log(result);
                        if (result.ok === 1) {
                            doc.accepted = true;
                            res.status(200).json(doc);
                        } else
                            res.status(500).json({
                                error: "Payment didn't accepted"
                            });
                    })
                    .catch(err => {
                        console.log(result);
                        res.status(500).json({
                            error: err
                        });
                    });
            }
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
}

function returnPayment(req, res, next) {
    const id = req.params.paymentId;
    Payment.findById(id).exec().then(doc => {
        console.log(doc);
        if (doc) {
            if (!doc.accepted) {
                return res.status(500).json({
                    err: "Payment didn't accepted"
                });
            }
            if (doc.returned) {
                return res.status(500).json({
                    err: "Payment already returned"
                });
            }
            else {
                Payment.update({ _id: id }, { returned: true })
                    .exec()
                    .then(result => {
                        console.log(result);
                        if (result.ok === 1) {
                            doc.returned = true;
                            res.status(200).json(doc);
                        } else
                            res.status(500).json({
                                error: "Payment didn't accepted"
                            });
                    })
                    .catch(err => {
                        console.log(result);
                        res.status(500).json({
                            error: err
                        });
                    });
            }
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
}

function declinePayment(req, res, next) {
    const id = req.params.paymentId;
    Payment.findById(id).exec().then(doc => {
        console.log(doc);
        if (doc) {
            if (doc.accepted) {
                return res.status(500).json({
                    err: "Payment already accepted"
                });
            } else {
                Payment.remove({
                    _id: id
                })
                    .exec()
                    .then(result => {
                        if (result.ok === 1)
                            res.status(200).json({
                                message: "The payment was declined"
                            });
                        else
                            res.status(500).json({
                                message: "The payment wasn't declined"
                            });
                    })
                    .catch(err => {
                        console.log(err);
                        res.status(500).json({
                            error: err
                        });
                    })
            }
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
}

module.exports = {
    getAllPayments: getAllPayments,
    getPayment: getPayment,
    setPayment: setPayment,
    acceptPayment: acceptPayment,
    returnPayment: returnPayment,
    declinePayment: declinePayment
};