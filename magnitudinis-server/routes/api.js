const express = require('express');
const mysql = require('mysql');
const firebase = require('firebase');
const router = express.Router();

//Connect to mysql database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'magnitudinis',
    password: 'magnitudinis',
    database: 'magnitudinis'
});

connection.connect((err) => {
    if (!err) {
        console.log("Database is connected...");
    }
    else {
        console.error("Error connecting database...", err);
    }
});

const config = {
    apiKey: "AIzaSyDlD4BhfgIWvqviyVEIhp1bf9CHDJpKpIQ",
    authDomain: "magnitudinis.firebaseapp.com",
    databaseURL: "https://magnitudinis.firebaseio.com",
    projectId: "magnitudinis",
    storageBucket: "magnitudinis.appspot.com",
    messagingSenderId: "876452068861"
  };

firebase.initializeApp(config);

module.exports = {
    router: router,
    getExpress: function() {
        return express;
    },
    getDatabaseConnection: function() {
        return connection;
    },
    getFirebase: function() {
        return firebase;
    }
};

