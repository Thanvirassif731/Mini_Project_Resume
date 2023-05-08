let answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById("submit").onclick = function() {
    let guess = document.getElementById("picker_box").ariaValueMax;
    guesses += 1;

    if (guess == answer) {
        alert(`${answer} is the correct number! It took you ${guesses} guesses!!`);
    }

    else if (guess < answer) {
        alert( `Too Small! Try again !!`);
    }

    else {
        alert(`Too Big! Try again !!`);
    }
}