$(document).ready(function() {
    // var mysql = require('mysql');
    // var express = require('express');
    // var session = require('express-session');
    // var bodyParser = require('body-parser');
    // var path = require('path');

    // var connection = mysql.createConnection({
    //     host: 'localhost',
    //     user: 'root',
    //     password: '',
    //     database: 'nodelogin'
    // });

    // var app = express();
    // app.use(session({
    //     secret: 'secret',
    //     resave: true,
    //     saveUninitialized: true
    // }));
    // app.use(bodyParser.urlencoded({ extended: true }));
    // app.use(bodyParser.json());

    // app.get('/', function(request, response) {
    //     response.sendFile(path.join(__dirname + '/login.html'));
    // });

    // app.post('/auth', function(request, response) {
    //     var username = request.body.username;
    //     var password = request.body.password;
    //     if (username && password) {
    //         connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
    //             if (!results.length > 0) {
    //                 request.session.loggedin = true;
    //                 request.session.username = username;
    //                 response.redirect('/index.html');
    //             } else {
    //                 response.send('Incorrect Username and/or Password!');
    //             }
    //             response.end();
    //         });
    //     } else {
    //         response.send('Please enter Username and Password!');
    //         response.end();
    //     }
    // });

    // app.get('/home', function(request, response) {
    //     if (request.session.loggedin) {
    //         response.send('Welcome back, ' + request.session.username + '!');
    //     } else {
    //         response.send('Please login to view this page!');
    //     }
    //     response.end();
    // });

    // app.listen(3000);

    // Write your custom Javascript codes here...

    this.sessionStorage.setItem("username", "esron");
    this.sessionStorage.setItem("password", "admin")

    var input = document.getElementsByTagName('input');
    var login = document.getElementById('log-in');
    var form = document.querySelector('form');
    form.onsubmit = () => { return false }
    login.onclick = () => {
        if ((input[0].value != "") && (input[1].value != "")) {
            if ((input[0].value == sessionStorage.getItem("username")) && (input[1].value == sessionStorage.getItem("password"))) {
                form.onsubmit = () => { return 1 }

            } else {
                if ((input[0].value != sessionStorage.getItem("username"))) {
                    inputp[0].nextElementSibling.textContent = "Username mot mach";
                    setTimeout(() => {
                        input[0].nextElementSibling.textContent = "";
                    }, 2000);

                }
                if ((input[1].value != sessionStorage.getItem("password"))) {
                    inputp[1].nextElementSibling.textContent = "password mot mach";
                    setTimeout(() => {
                        input[1].nextElementSibling.textContent = "";
                    }, 2000);

                }

            }
        } else {
            if (input[0].value == "") {
                inputp[0].nextElementSibling.textContent = "Username is emptyp";
                setTimeout(() => {
                    input[0].nextElementSibling.textContent = "";
                }, 2000);
            }
            if (input[1].value == "") {
                inputp[1].nextElementSibling.textContent = "password is emptyp";
                setTimeout(() => {
                    input[1].nextElementSibling.textContent = "";
                }, 2000);
            }

        }

    }


});