let tries = 0;

function choose(option) {
    let response = document.getElementById("response");
    
    if (option === "no") {
        tries++;
        if (tries === 1) {
            response.innerHTML = "😢 Awww, why not? Maybe you made a mistake.";
        } else {
            response.innerHTML = "Alright, bye.";
            disableButtons();
        }
    } else {
        window.location.href = "birthday.html"; // Redirect to the birthday page
    }
}

function disableButtons() {
    document.querySelectorAll("button").forEach(button => {
        button.disabled = true;
    });
}