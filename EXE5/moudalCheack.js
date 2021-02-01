const fs = require('fs')


function checkUser(userInfo) {
    console.log(userInfo)
    let Users = JSON.parse(fs.readFileSync('User.txt', 'utf8'))
    let flag = false;
    console.log(userInfo.userName)
    console.log(userInfo.password)
    for (let i = 0; i < Users.length; i++) {
        if (userInfo.userName === Users[i].userName && userInfo.password === Users[i].password) {

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