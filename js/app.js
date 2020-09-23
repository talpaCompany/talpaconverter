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
const alertMsg = document.querySelector('#alert');
const groupTitle = document.querySelector("#group-title");
const language = document.querySelector("#language");
const languageOptions = document.querySelector("#language-options");
const darkMode = document.querySelector("#dark-mode");
const root = document.documentElement;
const lblValue = document.querySelector('#lbl-value');
const lblFrom = document.querySelector('#lbl-from');
const lblTo = document.querySelector('#lbl-to');
const responsability = document.querySelector('#responsability');
const copyLink = document.createElement("i");
copyLink.setAttribute('id', 'copy-link')

// groups of metris to Menu
let groups = {}

// units types to dropdowns of units
let types = {}


const captilizeCase = sentence => sentence.toLowerCase().replace(/^\w/g, l => l.toUpperCase())
const sentenceCase = sentence => sentence.toLowerCase().replace(/^\w/, l => l.toUpperCase())
const getUrlParams = (strParams) => {
    return strParams.replace("?", "")
        .split("&")
        .map(str => {
            const param = str.split('=')
            const obj = {}
            obj[param[0]] = param[1]
            return obj
        }).reduce((obj, property) => {
            const newObj = {...obj, ...property}
            return newObj
        })
}

const msg = (text, type) => {
    // alertMsg.attr('class', '');
    alertMsg.className = type
    alertMsg.style.animation = 'fade-in 1s linear 0s alternate forwards';
    alertMsg.innerHTML = `<p>${captilizeCase(text)}</p>`;
    setTimeout(() => {
        alertMsg.style.animation = 'fade-out 1s linear 0s alternate forwards';
    }, 4000)
}

const fillGroups = (groups) => {
    groupTypes.innerHTML = "";
    for (const [key, value] of Object.entries(groups)) {
        groupTypes.innerHTML += `<a href="#" data-type="${key}">${captilizeCase(value)}</a>`
    }

    groupTypes.querySelectorAll('a').forEach(item => item.onclick = (e) => {
        e.preventDefault();
        fillTypes(item.dataset.type);
        sessionStorage.setItem('group', item.dataset.type);
        closeMenu();
    });
};


const fillTypes = (group) => {
    unitFrom.innerHTML = "";
    unitTo.innerHTML = "";
    
    copyLink.classList.add('fas', 'fa-link')
    copyLink.onclick = (e) => {
        navigator.clipboard.writeText(`${location.origin}/?category=${group}`).then(() => {
            const info = config.setLanguage.form.info;
            msg(info.copy, 'alert info');
        })
    }

    groupTitle.innerHTML = sentenceCase(groups[group])
    groupTitle.appendChild(copyLink)

    
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
    const error = config.setLanguage.form.error;
    
    if(valueFrom.value === "") {
        msg(error.nullValue, 'alert error')
        return false;
    }

    if (unitFrom.value === unitTo.value) {
        msg(error.sameUnits, 'alert error');
        return false;
    }

    alertMsg.innerHTML = "";
    return true;
}

// convert value and validade
const convert = (e) => {
    if(!validate()) return false;
    
    resultBoard.style.display = 'flex';
    window.location.href = `#result-board`;
    const nameFunc = `${unitFrom.value.toLowerCase()}To${captilizeCase(unitTo.value)}`;
    console.log(nameFunc);
    const exec = returnConvert(nameFunc);
    const convertedValue = exec(parseFloat(valueFrom.value));

    const valueSymbol =  unitFrom.querySelector(`[value="${unitFrom.value}"]`).dataset.symbol;
    const convertedSymbol =  unitTo.querySelector(`[value="${unitTo.value}"]`).dataset.symbol;

    document.querySelector('#from-value').innerHTML = `${valueFrom.value} ${valueSymbol}`;
    document.querySelector('#to-value').innerHTML = `${convertedValue} ${convertedSymbol}`;
}

const defaultLanguage = () => {
    if (navigator == null) return 'en'
    console.log(navigator.language.toLowerCase());
    switch(navigator.language.toLowerCase()) {
        case 'en-us':
            return 'en'
        case 'pt-br':
            return 'pt'
        default:
            return 'en'
    }

}

const setup = () => {
    const config = {}
    if (localStorage.getItem('language') == null || localStorage.getItem('language-flag') == null) {
        const prefix = defaultLanguage();
        localStorage.setItem("language", prefix)
        localStorage.setItem("language-flag", `./assets/img/${prefix}.png`)
        config.lang = prefix
        config.img = `./assets/img/${prefix}.png`
        
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
    
    // get params from url
    const params = getUrlParams(location.search)

    let category = 'temperature';

    config.setLanguage = defineLanguage(config);
    groups =  config.setLanguage.group;
    types =  config.setLanguage.types;

    if (params !== undefined && params.hasOwnProperty('category')) {
        category = groups.hasOwnProperty(params.category) ? params.category : category
    }
    
    
    sessionStorage.setItem('group', category);
    
    // fillGroups(groups)
    // fillTypes(category);

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
    groups =  config.setLanguage.group;
    types =  config.setLanguage.types;
    fillGroups(groups)
    fillTypes(sessionStorage.getItem('group'));
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

    searchMenu.placeholder = sentenceCase(l.nav.searchPlaceholder);
    lblValue.innerHTML = sentenceCase(l.form.value)
    valueFrom.placeholder = sentenceCase(l.form.valuePlaceholder)
    lblFrom.innerHTML = sentenceCase(l.form.from)
    lblTo.innerHTML = sentenceCase(l.form.to)
    btnConvert.innerHTML = sentenceCase(l.form.button)
    responsability.innerHTML = sentenceCase(l.footer.resposability)
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