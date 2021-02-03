// -------------------REQUIRES---------------------------------------------
const http = require('http')
const fs = require('fs')
    // -------------------SERVER------------------------------------------------
http.createServer(function(request, response) {
    // -----------URLS REQUEST ---------------------------------------------
    if (request.url === "/" && request.method === "GET") {
        fs.readFile('./index.html', 'utf8', (err, page) => {
            if (err) {
                response.write("Error: " + err);
                response.end();
            }
            response.write(page);
            response.end();
        })

    } else if (request.url === "/main.css" && request.method === "GET") {

        fs.readFile('main.css', 'utf8', (err, page) => {
            if (err) {
                response.write("Error: " + err);
                response.end();
            }
            response.write(page);
            response.end();
        })

    } else if (request.url === "/photo.jpg" && request.method === "GET") {
        fs.readFile('photo.jpg', (err, img) => {
            if (err) {
                response.write("error");
                response.end();
            }
            response.write(img);
            response.end();
        })

    } else if (request.url === "/main.js" && request.method === "GET") {

        fs.readFile('./main.js', 'utf8', (err, page) => {
            if (err) {
                response.write("Error: " + err);
                response.end();
            }
            response.write(page);
            response.end();
        })

    } else {
        response.write(" HAS BAD REQUEST PLEASE TRY AGAIN !!!!");
        response.end()

    }
}).listen(3000)
console.log(" THE SERVER IS STARTED IN 5005 !!!");