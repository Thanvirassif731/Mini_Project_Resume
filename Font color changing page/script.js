document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#red").onclick = function() {
        document.querySelector("#hello").style.color = "red";
        console.log("Red color clicked!");
    }

    document.querySelector("#green").onclick = function() {
        document.querySelector("#hello").style.color = "green";
        console.log("Green color clicked!");
    }

    document.querySelector("#blue").onclick = function() {
        document.querySelector("#hello").style.color = "blue";
        console.log("Blue color clicked!");
    }
});