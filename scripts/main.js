const getTableBtn = document.querySelector("#getTable");
const clearBtn = document.querySelector("#clearBtn");
const tableTxt = document.querySelector("#tableTxt");
const errorMessage = document.querySelector("#errorMessage");

getTableBtn.addEventListener("click", () => {
    let num = parseInt(document.querySelector("#tableInput").value);
    let places = parseInt(document.querySelector("#placeInput").value);

    if (isNaN(num) || num < 0 || isNaN(places) || places < 0) {
        errorMessage.style.display = "block";
        errorMessage.innerText = "Invalid value";
        tableTxt.innerText = "";
        return;
    } else if (places > 150) {
        errorMessage.style.display = "block";
        errorMessage.innerText = "Please enter a value less than or equal to 150 for places.";
        tableTxt.innerText = "";
        return;
    } else if (num > 1000) {
        errorMessage.style.display = "block";
        errorMessage.innerText = "Please enter a value less than or equal to 1000 for the number.";
        tableTxt.innerText = "";
        return;
    } else {
        errorMessage.style.display = "none";
        errorMessage.innerText = "";
    }
    let tableString = "";
    for (let i = 1; i <= places; i++) {
        let tb = num * i;
        tableString += num + " X " + i + " = " + tb + "\n";
    }
    tableTxt.innerText = tableString;
    getTableBtn.style.display = "none";
    clearBtn.style.display = "inline-block";
});

clearBtn.addEventListener("click", () => {
    getTableBtn.style.display = "inline-block";
    tableTxt.innerText = "";
    clearBtn.style.display = "none";
    errorMessage.style.display = "none";
    errorMessage.innerText = "";
});

tableTxt.innerText = "";
clearBtn.style.display = "none";

const scrollToTopButton = document.querySelector(".scrollToTopButton");
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 200) {
        scrollToTopButton.classList.add("visible");
    } else {
        scrollToTopButton.classList.remove("visible");
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0
    });
});

const tableInput = document.querySelector("#tableInput");
const placeInput = document.querySelector("#placeInput");
[tableInput, placeInput].forEach(input => {
    input.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            getTableBtn.click();
        }
    });
});