// -------------------JSON FILE ----------------

let json_File = {
    "firstName": "Rack",
    "lastName": "jackson",
    "gender": "man",
    "age": 24,
    "address": {
        "streetAddress": "126 var",
        "city": "san jon",
        "state": "CA",
        "postalCode": "394221"
    },
    "phoneNumbers": [
        { "type": "home", "number": "7383627627" }
    ]
}

// -------------------REQUIRES------------------
const http = require('http')
const fs = require('fs')
    // ---------------------------------------------
http.createServer(function(request, response) {
    // -----------URL / ------------------------
    if (request.url === "/" && request.method === "GET") {

        response.write("Hello Word !!");
        response.end();


    } else if (request.url === "/file" && request.method === "GET") {
        let temp = JSON.stringify(json_File)
        response.write(temp);
        response.end();


    } else {
        response.write(" HAS BAD REQUEST PLEASE TRY AGAIN !!!!");
        response.end()

    }
}).listen(5005)
console.log(" THE SERVER IS STARTED IN 5005 !!!");