const mongoose = require('mongoose');

const paymentSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    accout: String,
    sum: Number,
    description: String,
    date: String,
    accepted: Boolean
});

module.exports = mongoose.model('Payment', paymentSchema);