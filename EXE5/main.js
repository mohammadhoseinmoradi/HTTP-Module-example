let nameUser = $("#nameUsers")[0]
let namePassword = $("#namePasswords")[0]
console.log('ok')
console.log(namePasswords, nameUser)

// function loginUser() {
//     console.log('functions')
//     if (nameUser === "" && namePassword === "") {
//         $('.input-field').css('border', '3px solid red')

//     } else {
//         console.log(namePassword.value)
//         console.log(nameUser.value)
//         let User = [{
//             name: nameUser.value,
//             pass: namePassword.value,
//         }]

//     }
// }
// $(".btn").click(function() {
console.log('functions')
    // if (nameUser === "" && namePassword === "") {
    //     $('.input-field').css('border', '3px solid red')

// } else {
//     console.log(namePassword.value)
//     console.log(nameUser.value)
//     let User = [{
//         name: nameUser.value,
//         pass: namePassword.value,
//     }]

// }
// let User = [{
//     name: "mohammad",
//     pass: "12345",
// }]
// let a = JSON.parse(User)
// $.post("http://moradi.ir:3000/userInfo", User,
//     function(User, status) {
//         alert("Data: " + User.name + "< ------->" + User.pass + "\nStatus: " + status);
//     });
// });
let xhttp1 = new XMLHttpRequest();

xhttp1.onreadystatechange = function() {
    console.log(this.status);
    if (this.readyState == 4 && this.status == 300) {
        console.log(this.statusText);
        console.log(this.response)
        console.log("successful");
        // console.log("hgsfgraefdws");
    } else if (this.readyState == 4 && this.status == 400) {
        console.log(this.response, this.status);
        console.log("Error 400 NO RESPONSE");

    }

};
xhttp1.open("POST", "http://moradi.ir:3000/userInfo");
xhttp1.setRequestHeader("Content-type", "application/json");
xhttp1.send('{"userName": "mhammad","password": "12345"}');