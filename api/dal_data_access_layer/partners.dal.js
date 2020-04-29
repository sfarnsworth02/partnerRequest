// ******* Data Access Layer: Partner *******

const mongoose = require('mongoose');
const partnerSchema = require('../models/partners.model');

// CRUD methods
partnerSchema.static = 
{
    // in here only use a normal function for the time being
    create: function(data, callback) 
    {
        const partner = new this(data);
        partner.save(callback);
    },
    get: function(query, callback)
    {
        this.find(query, callback);
    },
    update: function(query, data, callback)
    {
        this.findOneAndUpdate(query, {$set: data}, callback);
    },
    delete: function(query, callback)
    {
        this.findOneAndDelete(query, callback);
    },
}

const partnerModel = mongoose.model('Partners', partnerSchema);
module.exports = partnerSchema;