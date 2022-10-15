const express = require('express');

const router = express.Router();

module.exports = (app) => {

    // two routes for views
    router.get('/api/allfilms', (req, res) => {
        
        app.set('myDb').collection('students').find({}).toArray(function
            (err, docs) {
            if (err) {
                console.error(err)
            }
            console.dir(docs);
            res.json(docs)
        })
    });

    // two routes for JSON


    return router;

}
