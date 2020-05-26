const mongoose = require('mongoose');
const Schema = mongoose.Schema;



let Jobs = new Schema ({
    job_company: {
        type: String
    },
    job_title: {
        type: String
    },
    job_title: {
        type: String
    },
    job_salary: {
        type: String
    },
    job_description: {
        type: String
    },
    job_location: {
        type: String
    },
    job_completed: {
        type: Boolean
    }
});


module.exports = mongoose.model('Jobs', Jobs);