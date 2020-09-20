import returnConvert from './controller.js'
import defineLanguage from '../assets/language/lang.js'
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
// const btnSearch = document.querySelector('#btn-search');
const alert = document.querySelector('#alert');
const groupTitle = document.querySelector("#group-title");
const language = document.querySelector("#language");
const languageOptions = document.querySelector("#language-options");
const darkMode = document.querySelector("#dark-mode");
const root = document.documentElement;
const lblValue = document.querySelector('#lbl-value');
const lblFrom = document.querySelector('#lbl-from');
const lblTo = document.querySelector('#lbl-to');
const responsability = document.querySelector('#responsability');

// groups of metris to Menu
const groups = {
    temperature: 'temperature',
    dataMetrics: 'data metrics',
    finance: 'finance'
}

// units types to dropdowns of units
const types = {
    temperature: {
        celsius: ['celsius', 'ºC'],
        kelvin: ['kelvin', 'ºK'],
        fahrenheit: ['fahrenheit', 'ºF']
    },
    finance: {
        dollar: ['dollar (U$)', 'U$'],
        real: ['brazillian real (R$)', 'R$'],
    },
    dataMetrics: {
        bit: ['bit', 'b' ],
        byte: ['byte', 'B' ]
    } 
}


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
    groupTitle.innerHTML = groups[group].replace(/\b\w/g, l => l.toUpperCase());
    for(const [key, value] of Object.entries(types[group])) {
        const option = `<option value="${key}" data-symbol="${value[1]}">${value[0]}</option>`;
        unitFrom.innerHTML += option;
        unitTo.innerHTML += option;
    }
}

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
    
    const exec = returnConvert(nameFunc);
    const convertedValue = exec(parseFloat(valueFrom.value));

    const valueSymbol =  unitFrom.querySelector(`[value="${unitFrom.value}"]`).dataset.symbol;
    const convertedSymbol =  unitTo.querySelector(`[value="${unitTo.value}"]`).dataset.symbol;

    document.querySelector('#from-value').innerHTML = `${valueFrom.value} ${valueSymbol}`;
    document.querySelector('#to-value').innerHTML = `${convertedValue} ${convertedSymbol}`;
}

const setup = () => {
    const config = {}
    if (localStorage.getItem('language') == null || localStorage.getItem('language-flag') == null) {
        localStorage.setItem("language", 'en')
        localStorage.setItem("language-flag", './assets/img/en-us.png')
        config.lang = 'en'
        config.img = './assets/img/en-us.png'
        
    } else {
        config.lang = localStorage.getItem('language')
        config.img = localStorage.getItem('language-flag')
    } 

    if (localStorage.getItem('--second-color') !== "null") {
        let secondColor = localStorage.getItem('--second-color')
        let thirdColor = localStorage.getItem('--third-color')

        root.style.setProperty('--second-color', secondColor);
        root.style.setProperty('--third-color', thirdColor);
    }
    config.setLanguage = defineLanguage(config);

    fillGroups(groups)
    fillTypes('temperature');

    return config;
}

const selectLanguage = (e) => {
    e.preventDefault()
    
    if(languageOptions.dataset.status === "closed"){
        languageOptions.style.animation = "fade-in 0.5s linear 0s normal forwards"
        languageOptions.style.display = "initial"
    }
}
const setLanguage = ({lang, img}) => {
    language.dataset.value = lang;
    language.src = img;
    language.alt = lang;
    localStorage.setItem("language", lang);
    localStorage.setItem("language-flag", img);
    config.lang = lang;
    config.img = img;
    config.setLanguage = defineLanguage({lang});
    translate();
}
languageOptions.querySelectorAll("a").forEach(link => {
    link.onclick = (e) => {
        e.preventDefault();
        const {dataset} = link;
        setLanguage(dataset);
        languageOptions.style.animation = "fade-out 0.5s linear 0s normal forwards";
        setTimeout(() => languageOptions.style.display = "none");
    }
});

// update text with language
const translate = () => {
    const l = config.setLanguage;

    searchMenu.placeholder = l.nav.searchPlaceholder.replace(/\b\w/g, w => w.toUpperCase());
    lblValue.innerHTML = l.form.value.replace(/\b\w/g, w => w.toUpperCase());
    lblFrom.innerHTML = l.form.from.replace(/\b\w/g, w => w.toUpperCase());
    lblTo.innerHTML = l.form.to.replace(/\b\w/g, w => w.toUpperCase());
    btnConvert.innerHTML = l.form.button.replace(/\b\w/g, w => w.toUpperCase());
    responsability.innerHTML = l.footer.resposability.replace(/\b\w/, w => w.toUpperCase());
}


// Dark Mode
const darkModeFunction = (e) => {
    e.preventDefault();
    const secondColor = getComputedStyle(root).getPropertyValue('--second-color')
    const thirdColor = getComputedStyle(root).getPropertyValue('--third-color')
    root.style.setProperty('--second-color', thirdColor)
    root.style.setProperty('--third-color', secondColor)
    localStorage.setItem('--second-color', thirdColor);
    localStorage.setItem('--third-color', secondColor);
    
}

// add events to listeners
btnOpenMenu.onclick = openMenu;
btnCloseMenu.onclick = closeMenu;
searchMenu.oninput = searchGroups;
// btnSearch.onclick = searchGroups;
formConversor.onsubmit = e => e.preventDefault();
btnConvert.onclick = convert;
language.onclick = selectLanguage;
darkMode.onclick = darkModeFunction


const config = setup()
setLanguage(config)

translate();