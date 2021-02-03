$(".btn").click(function() {
    let nameUser = $("#nameUsers")[0]
    let namePassword = $("#namePasswords")[0]
    if (nameUser.value === "" && namePassword.value === "") {
        $('.input-field').css("border", "3px solid red")
        $('.pCheck').css("display", "block")
        $('.pCheck').css("color", "red")
        $('#nameUsers').attr("placeholder", "❌نام کاربری")
        $('#namePasswords').attr("placeholder", "❌رمزعبور")
        let modalText = document.getElementById('modalText')
        modalText.innerHTML = "Please fill all input" + "    ❌"
        modal.style.fontSize = "21px"
        modalText.style.color = "red"

    } else if (nameUser.value === "") {
        let modalText = document.getElementById('modalText')
        $('#nameUsers').attr("placeholder", "❌نام کاربری")
        modalText.innerHTML = "Please fill Name input" + "    ❌"
        modal.style.fontSize = "21px"
        modalText.style.color = "red"
        $('#pcheckName').css("display", "block")
        $('#pcheckName').css("color", "red")
    } else if (namePassword.value === "") {
        let modalText = document.getElementById('modalText')
        modalText.innerHTML = "Please fill Pass input" + "    ❌"
        $('#namePasswords').attr("placeholder", "❌رمزعبور")
        modal.style.fontSize = "21px"
        modalText.style.color = "red"
        $('#pcheckPass').css("display", "block")
        $('#pcheckPass').css("color", "red")
    } else {
        sendRequest(nameUser.value, namePassword.value)
    }
})
$("#nameUsers").click(function() {
    $("#nameUsers").val("");
});
$("#namePasswords").click(function() {
    $("#namePasswords").val("");
});
$(".close").click(function() {
        $('.input-field').css('border', '3px solid white')
        $('#nameUsers').attr("placeholder", "نام کاربری")
        $('#namePasswords').attr("placeholder", "رمزعبور")
        $('.pCheck').css("display", "none")

    })
    // -------------------- send request check user--------------------
function sendRequest(nameUser, namePassword) {
    let UserInfo = [{
        userName: nameUser,
        password: namePassword
    }]
    console.log(UserInfo);
    let requestHttp = new XMLHttpRequest();
    requestHttp.onreadystatechange = function() {
        console.log(this.status);
        if (this.readyState == 4 && this.status == 300) {
            let modalText = document.getElementById('modalText')
            modalText.innerHTML = "successful" + "    ✔️"
            modal.style.fontSize = "21px"
            modalText.style.color = "green"

        } else if (this.readyState == 4 && this.status == 400) {
            let modalText = document.getElementById('modalText')
            modalText.innerHTML = "Error 400 NO RESPONSE" + "    ❌"
            modal.style.fontSize = "21px"
            modalText.style.color = "red"
        }
    };
    requestHttp.open("POST", "http://moradi.ir:3000/userInfo");
    requestHttp.setRequestHeader("Content-type", "application/json");
    requestHttp.send(JSON.stringify(UserInfo));
}

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";


}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}