document.getElementById("submit-button").addEventListener("click", function() {
    var password = document.getElementById("password").value;
    if (password === "1421") {
        document.querySelector(".password-container").classList.add("hidden");
        document.getElementById("message-container").classList.remove("hidden");
        document.getElementById("birthday-audio").play();
    } else {
        alert("Password salah, coba lagi.");
    }
});

function showMessage() {
    var message = document.getElementById("special-message");
    var replyButton = document.getElementById("reply-button");
    var photos = document.getElementById("photos");

    message.classList.remove("hidden");
    replyButton.classList.remove("hidden");
    photos.classList.remove("hidden");
}
