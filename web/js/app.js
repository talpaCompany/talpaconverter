const btnOpenMenu = document.querySelector("#open-menu");
const navbar = document.querySelector("#navbar");
const btnCloseMenu = document.querySelector("#close-menu");
const valueFrom = document.querySelector("#init-value");
const unitFrom = document.querySelector("#unitFrom");
const unitTo = document.querySelector("#unitTo");
const resultBoard = document.querySelector('#result-board');
const formConversor = document.querySelector('#conversor-form');
const btnConvert = document.querySelector('#convert');
// navbar events

const openMenu = (e) => {
    e.preventDefault();
    navbar.style.display = "initial";
    navbar.style.animation = "show-menu 0.5s"
}

const closeMenu = (e) => {
    e.preventDefault();
    navbar.style.animation = "hide-menu 0.5s"
    setTimeout(() => {
        navbar.style.display = "none";
    }, 500);
    // navbar.style.display = "none";
}

// form-conversor events
const validate = () => {
    if(valueFrom.value === "") {
        valueFrom.setCustomValidity("You must enter a value!");
        valueFrom.reportValidity();
        return false;
    }

    if (unitFrom.value === unitTo.value) {
        unitTo.setCustomValidity("The units mustn't be the same");
        unitTo.reportValidity();
        return false;
    }

    valueFrom.setCustomValidity("");
    unitFrom.setCustomValidity("");
    unitTo.setCustomValidity("");
    return true;
}

// convert value and validade
const convert = (e) => {
    if(!validate()) return false;
    
    
    resultBoard.style.display = 'flex';
    window.location.href = `#result-board`;

    const convertedValue = celsiusToFahrenheit(valueFrom.value);

    document.querySelector('#from-value').innerHTML = `${valueFrom.value} ºC`;
    document.querySelector('#to-value').innerHTML = `${convertedValue} ºF`;
}

btnOpenMenu.onclick = openMenu;
btnCloseMenu.onclick = closeMenu;
formConversor.onsubmit = e => e.preventDefault();
btnConvert.onclick = convert;