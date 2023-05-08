document.getElementById("submit").onclick = function() {
    let temp;

    if (document.getElementById("c_radiobtn1").checked) {
        temp = document.getElementById("textbox").value;
        temp = Number(temp);
        temp = toCelsius(temp);
        document.getElementById("answer").innerHTML = temp + "*C";
    }

    else if (document.getElementById("f_radiobtn1").checked) {
        temp = document.getElementById("textbox").value;
        temp = Number(temp);
        temp = toFahrenheit(temp);
        document.getElementById("answer").innerHTML = temp + "*F";
    }

    else {
        document.getElementById("answer").innerHTML = "Please select the convertion radio button";
    }

    function toCelsius(temp) {
        return (temp - 32) * (5/9);
    }

    function toFahrenheit(temp) {
        return temp * 9 / 5 + 32;
    }
}