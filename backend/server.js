const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;
const mongoose = require('mongoose');
const somRoutes = express.Router();


let Jobs = require('./somjob.model');



app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/somjob', {useNewUrlParser: true});
const connection = mongoose.connection;

connection.once('open', function(){
    console.log("MongoDB database connection established successfully");
});




somRoutes.route('/').get(function(req, res){
    Jobs.find(function(err, somjob){
        if(err){
            console.log(err)
        } else {
            res.json(somjob)
        }
    });

});

somRoutes.route('/:id').get(function(req, res){
    let id = req.params.id;
    Jobs.findById(id, function(err, som){
        res.json(som);
    })
});

somRoutes.route('/add').post(function(req, res){
    let som = new Jobs(req.body);
    som.save()
    .then(som => {
        res.status(200).json({'som': 'som added successfuly'});
    })
    .catch(err => {
        res.status(400).send('adding new som failed')
    });
})

somRoutes.route('/update/:id').post(function(req, res){
    Jobs.findById(req.params.id, function(err, som){
        if (!som)
         res.status(404).send('data is not found');

        else
        som.job_company = req.body.job_company;
        som.job_title = req.body.job_title;
        som.job_salary = req.body.job_salary;
        som.job_description = req.body.job_description;
        som.job_location = req.body.job_location;
        som.job_completed = req.body.job_completed;

        som.save().then(som => {
            res.json('Som Updated');
        })
        .catch(err => {
            res.status(400).send("Update not possible")
        });
    });
});


app.use('/somjob', somRoutes);





app.listen(PORT, function(){
    console.log("Server is running on Port: " + PORT);
})
