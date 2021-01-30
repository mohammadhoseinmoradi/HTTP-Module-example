// -------------------REQUIRES------------------
const http = require('http')
const fs = require('fs')
    // ---------------------------------------------
http.createServer(function(request, response) {
    // -----------URL / ------------------------
    if (request.url === "/" && request.method === "GET") {
        response.setHeader("Content-Type", "text/html");
        fs.readFile('main.html', 'utf8', (err, page) => {
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
}).listen(5005)
console.log(" THE SERVER IS STARTED IN 5005 !!!");