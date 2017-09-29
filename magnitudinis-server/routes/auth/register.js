const api = require('../api');
const express = api.getExpress();
const router = express.Router();
const connection = api.getDatabaseConnection();
const firebase = api.getFirebase();


/* GET api listing. */
router.post('/register', (req, res) => {
    queryParams = req.body;

    firebase.auth().createUserWithEmailAndPassword(queryParams.values.email, queryParams.values.password)
    .then(() => {
        var user = firebase.auth().currentUser;
        user.sendEmailVerification()
            .then(() => {
                console.log("Email Verification sent");
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage);
            });
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
    });
    
    responseObject = {
        message: 'Registration of user successfull',
        success: false
    }
    res.send(responseObject);



    // connection.query('SELECT DEPT_ID, DEPT_NAME FROM DEPARTMENT', function (err, rows, fields) {
    //     connection.end();
    //     if (!err) {
    //         responseObject = {
    //             data: rows,
    //             success: true
    //         };
    //         res.send(responseObject);
    //     }
    //     else
    //         console.log('Error while performing Query.');
    // });
});

module.exports = {
    router: router
};