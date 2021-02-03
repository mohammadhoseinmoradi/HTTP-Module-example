// -------------------REQUIRES-------------------------------------------
const http = require('http')
const fs = require('fs')
    // ---------------SERVER---------------------------------------------
http.createServer(function(request, response) {
    // -----------URLS REQUEST ------------------------------------------
    if (request.url === "/" && request.method === "GET") {
        response.write("Hello Web Application");
        response.end();

    } else if (request.url === "/about" && request.method === "GET") {
        console.log(request.url)
        response.write("About Me");
        response.end();


    } else if (request.url === "/home" && request.method === "GET") {
        console.log(request.url)
        response.write("Home Me");
        response.end();


    } else if (request.url === "/content" && request.method === "GET") {
        console.log(request.url)
        response.write("Content Me");
        response.end();


    } else if (request.url === "/link" && request.method === "GET") {
        console.log(request.url)
        response.write("Link Me");
        response.end();


    } else {
        response.write("NOT FOUND ===> HAS BAD REQUEST PLEASE TRY AGAIN !!!!");
        response.end()

    }
}).listen(3000)
console.log(" THE SERVER IS STARTED IN 5005 !!!");