const DBNAME = 'firstdb';
// this is what is imported into another file
module.exports = 
{
    PORT: 3333,
    DBNAME,
    APPNAME: 'Partner Request',
    DBURI: `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@contactsapp-z9t9p.mongodb.net/${DBNAME}?retryWrites=true&w=majority`,
};