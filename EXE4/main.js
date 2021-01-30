var arrCheckUserName = [];

function insertUserName() {

    let x = document.getElementById("input1").value;
    arrCheckUserName.push(x);

}
var arrCheckPassword = [];

function insertPassword() {

    let f = document.getElementById("input2").value;
    arrCheckPassword.push(f);

}
var arrCheckReaptePassword = [];

function insertReaptePassword() {

    let q = document.getElementById("input3").value;
    arrCheckReaptePassword.push(q);

}

let tag = document.getElementsByTagName("fieldset")[0]
let tag1 = document.getElementsByTagName("fieldset")[1]
let tag2 = document.getElementsByTagName("fieldset")[2]


function check() {
    let btn = document.getElementById("btn");
    let num = 0;
    let num2 = 0;
    num = arrCheckPassword.length;
    num2 = arrCheckReaptePassword.length;
    let alefba = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    let pass = [];
    let passcheak = [];
    pass = arrCheckPassword[num - 1];
    passcheak = arrCheckReaptePassword[num2 - 1]

    var flag = false;
    var flag1 = false;
    if (pass !== undefined) {
        for (var i = 0; i < pass.length; i++) {
            if (alefba.includes(pass[i])) {
                console.log(pass[i])
                flag = true;

            }
            if (numbers.includes(pass[i])) {
                flag1 = true

            }
            if (flag == true && flag1 == true) {
                break;
            } else {
                flag = false;
            }
        }


    } else {
        // tag.style.border = "3px solid red";
        tag.style.border = "3px solid red"
        tag.style.color = "red"
        document.querySelector('input[id=input1]').style.setProperty("--c", "red")
        document.getElementById("textUserName").innerText = "الزامی ";
        document.getElementById("textUserName").style.color = "red";
        btn.style.backgroundColor = "rgb(214, 99, 99)";
    }

    if (flag == false || num < 8) {
        if (num < 8) {
            // tag.style.border = "3px solid red";
            tag1.style.border = "3px solid red"
            tag1.style.color = "red"
            document.querySelector('input[id=input2]').style.setProperty("--c", "red")
            document.getElementById("textPassword").innerText = " پسورد باید بیش از 8 کاراکتر باشد";
            document.getElementById("textPassword").style.color = "red";
        }

        // tag.style.border = "3px solid red";
        tag1.style.border = "3px solid red"
        tag1.style.color = "red"
        document.querySelector('input[id=input2]').style.setProperty("--c", "red")
        document.getElementById("textPassword").innerText = "(پسورد باید شامل حداقل یک حرف و یک عدد باشد)";
        document.getElementById("textPassword").style.color = "red";
        btn.style.backgroundColor = "rgb(214, 99, 99)";
    } else if (num == num2) {
        if (pass != passcheak) {
            tag2.style.border = "3px solid red"
            tag2.style.color = "red"
            document.querySelector('input[id=input3]').style.setProperty("--c", "red")
            let text = "پسور با تکرار پسور برابر نمی باشد";
            document.getElementById("textReapetPassword").innerText = "پسور با تکرار پسور برابر نمی باشد";
            document.getElementById("textReapetPassword").style.color = "red";
            // tag.style.border = "3px solid red";
            btn.style.backgroundColor = "rgb(214, 99, 99)";
        }
    }

}