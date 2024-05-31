const { MAX_JS_INT } = require('mongodb/lib/utils');
const mongoose = require('mongoose')
const dbURI = process.env.DB_URL

module.exports = async function dbConnection(){
 try {
    await mongoose.createConnection(dbURI);
    console.log('Database connection works!')
 } catch (error) {
    console.log(error);
 }
}
