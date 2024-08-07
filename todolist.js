const inputBox = document.getElementById("inpbox");
const unOrder = document.getElementById("unorder");

function todolist() {
    if (inputBox.value === '') {
        alert("You must enter some text in this field!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        unOrder.appendChild(li);
    }
    inputBox.value = "";
    storeData();
}

unOrder.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("tick"); // Ensure the class name matches the CSS
        storeData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        storeData();
    }
}, false);

function storeData() {
    localStorage.setItem("data", unOrder.innerHTML);
}

function display() {
    unOrder.innerHTML = localStorage.getItem("data") || '';
}

display();