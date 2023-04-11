let count = 0;

document.getElementById("dec_bnt").onclick = function() {
    count -= 1;
    document.getElementById("counter").innerHTML = count;
    console.log("Decreased");
}

document.getElementById("res_bnt").onclick = function() {
    count = 0;
    document.getElementById("counter").innerHTML = count;
    console.log("Reset!!!");
}

document.getElementById("inc_bnt").onclick = function() {
    count += 1;
    document.getElementById("counter").innerHTML = count;
    console.log("Increased");
}