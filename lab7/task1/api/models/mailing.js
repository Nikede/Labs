const mongoose = require('mongoose');

const mailingSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    sender: String,
    receiver: String,
    messageId: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model('Mailing', mailingSchema);