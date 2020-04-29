const mongoose = require('mongoose');

const dbUri = require('./settings').DBURI;
const dbOptions = 
{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
}

module.exports = () => 
{
    mongoose.connect(dbUri, dbOptions);

    mongoose.connection.on('connected', () => 
    {
        console.log(`Successfully connected to my MongoDB!`);
    });

    mongoose.connection.on('error', (err) =>
    {
        console.log(`MongoDB connection error: `, err);
    });

    mongoose.connection.on(`disconnected`, () => 
    {
        console.log(`MongoDB connection was disconnected...`);
    });


    // closing connection when logging out of application
    process.on('SIGINT', () => 
    {
        mongoose.connection.close(() =>
        {
            console.log('Closing MongoDB connection due to application termination.');
            process.exit();
        })
    });
}