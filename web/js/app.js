import m from './controller.js';

// Setut of web controls
const btnOpenMenu = document.querySelector('#open-menu');
const navbar = document.querySelector('#navbar');
const btnCloseMenu = document.querySelector('#close-menu');
const valueFrom = document.querySelector('#init-value');
const unitFrom = document.querySelector('#unitFrom');
const unitTo = document.querySelector('#unitTo');
const resultBoard = document.querySelector('#result-board');
const formConversor = document.querySelector('#conversor-form');
const btnConvert = document.querySelector('#convert');
const groupTypes = document.querySelector('#group-types');
const searchMenu = document.querySelector('#search-type');
const btnSearch = document.querySelector('#btn-search');
const alert = document.querySelector('#alert');

// groups of metris to Menu
const groups = {
    temperature: 'temperature',
    dataMetrics: 'data metrics',
    finance: 'finance'
}

// units types to dropdowns of units
const types = {
    temperature: {
        celsius: 'celsius',
        kelvin: 'kelvin',
        fahrenheit: 'fahrenheit'
    },
    finance: {
        dollar: 'dollar (U$)',
        real: 'brazillian real (R$)',
    },
    dataMetrics: {
        bit: 'bit',
        byte: 'byte'
    } 
}


Object.freeze(groups);
Object.freeze(types);


const fillGroups = (groups) => {
    groupTypes.innerHTML = "";
    for (const [key, value] of Object.entries(groups)) {
        groupTypes.innerHTML += `<a href="#" data-type="${key}">${value.replace(/\b\w/g, l => l.toUpperCase())}</a>`
    }

    groupTypes.querySelectorAll('a').forEach(item => item.onclick = (e) => {
        e.preventDefault;
        fillTypes(item.dataset.type);
        closeMenu();
    });
};


const fillTypes = (group) => {
    unitFrom.innerHTML = "";
    unitTo.innerHTML = "";
    for(const [key, value] of Object.entries(types[group])) {
        unitFrom.innerHTML += `<option value="${key}">${value}</option>`;
        unitTo.innerHTML += `<option value="${key}">${value}</option>`;
    }
}

fillGroups(groups)
fillTypes('temperature');

// navbar events
const openMenu = (e) => {
    e.preventDefault();
    navbar.style.display = "initial";
    navbar.style.animation = "show-menu 0.5s"
}

const closeMenu = (e) => {
    if (e)  
        e.preventDefault();
    navbar.style.animation = "hide-menu 0.5s"
    setTimeout(() => {
        navbar.style.display = "none";
    }, 500);
}

// search
const searchGroups = (e) => {
    e.preventDefault();
    
    const filteredGroup = {};
    const regex = new RegExp(`\\b${searchMenu.value}`, 'gi');

    for (const [key, value] of Object.entries(groups)) {
        if(regex.test(value)) {
            filteredGroup[key] = value;
        }
    }
    fillGroups(filteredGroup);
}

// form-conversor events
const validate = () => {
    const msg = (text) => {
        alert.style.animation = 'fade-in 1s linear 0s alternate forwards';
        alert.innerHTML = `<p>${text}</p>`;
        setTimeout(() => {
            alert.style.animation = 'fade-out 1s linear 0s alternate forwards';
        }, 4000)
    }

    if(valueFrom.value === "") {
        msg("You must enter a value!")
        return false;
    }

    if (unitFrom.value === unitTo.value) {
        msg("The units mustn't be the same");
        return false;
    }

    alert.innerHTML = "";
    return true;
}

// convert value and validade
const convert = (e) => {
    if(!validate()) return false;
    
    
    resultBoard.style.display = 'flex';
    window.location.href = `#result-board`;
    const nameFunc = `${unitFrom.value}To${unitTo.value.replace(/^\w/, l => l.toUpperCase())}`;
    console.log(nameFunc);
    // const exec = returnConvert();
    const convertedValue = 10; //celsiusToFahrenheit(valueFrom.value);

    document.querySelector('#from-value').innerHTML = `${valueFrom.value} ºC`;
    document.querySelector('#to-value').innerHTML = `${convertedValue} ºF`;
}

// add events to listeners
btnOpenMenu.onclick = openMenu;
btnCloseMenu.onclick = closeMenu;
btnSearch.onclick = searchGroups;
formConversor.onsubmit = e => e.preventDefault();
btnConvert.onclick = convert;