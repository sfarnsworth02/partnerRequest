const mongoose = require('mongoose');
const schema = mongoose.Schema;

// shortcut for schema
const partnerSchema = new Schema
({
	name: {
        type: String,
        unique: true,
        required: true,
    },
	contract: {
        type: Boolean,
        required: false,
    },
	isActive: {
        type: Boolean,
        required: false,
    },
	reqStatus: {
        type: String,
        required: true,
    },
	reqSeason: {
        type: String,
        required: true,
    },
});

module.exports = partnerSchema;