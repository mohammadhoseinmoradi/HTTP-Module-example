// -------------------REQUIRES------------------
const http = require('http')
const fs = require('fs')
const resultCheck = require('./moudalCheack')
const checkUser = require('./moudalCheack')
const RES = require('./response');
// ---------------------------------------------
http.createServer(function(request, response) {
    // -----------URL / ------------------------
    if (request.url === "/" && request.method === "GET") {
        fs.readFile('./index.html', 'utf8', (err, page) => {
            if (err) {
                response.write("Error: " + err);
                response.end();
            }
            response.write(page);
            response.end();
        })

    } else if (request.url === "/loginForm.css" && request.method === "GET") {

        fs.readFile('loginForm.css', 'utf8', (err, page) => {
            if (err) {
                response.write("Error: " + err);
                response.end();
            }
            response.write(page);
            response.end();
        })

    } else if (request.url === "/photo_2020-12-21_12-04-33.jpg" && request.method === "GET") {
        fs.readFile('photo_2020-12-21_12-04-33.jpg', (err, img) => {
            if (err) {
                response.write("error");
                response.end();
            }
            response.write(img);
            response.end();
        })

    } else if (request.url === "/fontiran.css" && request.method === "GET") {

        fs.readFile('fontiran.css', 'utf8', (err, page) => {
            if (err) {
                response.write("Error: " + err);
                response.end();
            }
            response.write(page);
            response.end();
        })

    } else if (request.url === "/style.css" && request.method === "GET") {

        fs.readFile('style.css', 'utf8', (err, page) => {
            if (err) {
                response.write("Error: " + err);
                response.end();
            }
            response.write(page);
            response.end();
        })

    } else if (request.url === "/main.js" && request.method === "GET") {

        fs.readFile('main.js', 'utf8', (err, page) => {
            if (err) {
                response.write("Error: " + err);
                response.end();
            }
            response.write(page);
            response.end();
        })

    } else if (request.url === "/userInfo" && request.method === "POST") {
        // response.statusCode = "300";
        request.on('data', function(data) {
            console.log(`Data chunk available: ${data}`);

            var userInfo = JSON.parse(data)
            console.log(checkUser(userInfo));
            sttautts(checkUser(userInfo))



        })

        function sttautts(a) {
            console.log(a, "lllllllllllllllllllllllllllllll")
            response.statusCode = a;
            response.end();

        }
    } else {
        response.write(" HAS BAD REQUEST PLEASE TRY AGAIN !!!!");
        response.end()

    }
}).listen(3000)
console.log(" THE SERVER IS STARTED IN 5005 !!!");