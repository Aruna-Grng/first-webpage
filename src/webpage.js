function replaceText(newText1) {
    let response = document.querySelector(".decor");
    response.innerHTML = newText1;
}

function questions() {
    let name = prompt("What is your name?");
    name = name.toUpperCase()
        .bold()
        .fontcolor('#ffffff')
        .fontsize("6");
    
    let travel = prompt("Have you been to Nepal?\nPlease enter 'Yes' or 'No'.");
    travel = travel.toUpperCase().trim();

    if (travel === 'Yes' || travel === 'yes') {
        replaceText(`Hello ${name}, here is a short video on Nepal. Enjoy!😉👍`);
    } else {
        replaceText(`Hello ${name}, here is a short video on Nepal. Enjoy!😉👍`);
    }
}

let clickButton = document.querySelector("button");
clickButton.addEventListener("click", questions);