const fs = require('fs')


function checkUser(userInfo) {

    let Users = JSON.parse(fs.readFileSync('User.txt', 'utf8'))
    let flag = false;

    for (let i = 0; i < Users.length; i++) {
        if (userInfo[0].userName === Users[i].userName && userInfo[0].password === Users[i].password) {

            return ("300")
        } else {
            flag = true;
        }
    }
    if (flag === true) {
        return ("400")
    }
}
module.exports = checkUser;