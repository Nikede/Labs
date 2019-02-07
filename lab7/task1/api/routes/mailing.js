const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Mailing = require('../models/mailing');
const Message = require('../models/message')

router.get('/', (req, res, next) => {
    Mailing.find().exec().then(docs => {
        console.log(docs);
        if (docs.length === 0)
            res.status(200).json(docs);
        var result = [];
        docs.forEach(element => {
            var messageText;
            Message.findById(element.messageId).exec().then(message => {
                messageText = message.text;
                result.push({
                    _id: element._id,
                    sender: element.sender,
                    receiver: element.receiver,
                    message: messageText
                });
                if (result.length === docs.length)
                    res.status(200).json(result);
            });
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    });
});

router.post('/', (req, res, next) => {
    if (req.body.sender === undefined || req.body.receiver === undefined || req.body.text === undefined) {
        return res.status(500).json({
            error: "All fields are required (sender, receiver, text)"
        });
    }
    const messageId = new mongoose.Types.ObjectId();
    const message = new Message({
        _id: messageId,
        text: req.body.text
    });
    message.save()
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
    const mailing = new Mailing({
        _id: new mongoose.Types.ObjectId(),
        sender: req.body.sender,
        receiver: req.body.receiver,
        messageId: messageId
    });
    mailing.save().then(result => {
        console.log(result);
        res.status(201).json({
            createdMailing: result
        });
    })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

router.get('/:mailingId', (req, res, next) => {
    const id = req.params.mailingId;
    Mailing.findById(id).exec().then(doc => {
        console.log(doc);
        if (doc) {
            var result;
            var messageText;
            Message.findById(doc.messageId).exec().then(message => {
                messageText = message.text;
                result = {
                    _id: doc._id,
                    sender: doc.sender,
                    receiver: doc.receiver,
                    message: messageText
                };
                res.status(200).json(result);
            });
        } else {
            res.status(404).json({
                message: "Not found"
            })
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