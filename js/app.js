import returnConvert from './controller.js'
import defineLanguage from '../assets/language/lang.js'

// Setut of web controls
const metaDescription = document.querySelector('meta[name=description]');
const btnOpenMenu = document.querySelector('#open-menu')
const navbar = document.querySelector('#navbar')
const btnCloseMenu = document.querySelector('#close-menu')
const valueFrom = document.querySelector('#init-value')
const unitFrom = document.querySelector('#unitFrom')
const unitTo = document.querySelector('#unitTo')
const resultBoard = document.querySelector('#result-board')
const formConversor = document.querySelector('#conversor-form')
const btnConvert = document.querySelector('#convert')
const groupTypes = document.querySelector('#group-types')
const searchMenu = document.querySelector('#search-type')
const alertMsg = document.querySelector('#alert')
const groupTitle = document.querySelector("#group-title")
const language = document.querySelector("#language")
const languageOptions = document.querySelector("#language-options")
const darkMode = document.querySelector("#dark-mode")
const root = document.documentElement
const lblValue = document.querySelector('#lbl-value')
const lblFrom = document.querySelector('#lbl-from')
const lblTo = document.querySelector('#lbl-to')
const responsability = document.querySelector('#responsability')
const otherCategories = document.querySelector('#other-categories')

// create copy link
const copyLink = document.createElement("a")
copyLink.setAttribute('id', 'copy-link')
const icon = document.createElement("i")
icon.className = 'fas fa-copy'
copyLink.appendChild(icon)

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
    // alertMsg.attr('class', '')
    alertMsg.className = type
    alertMsg.style.animation = 'fade-in 1s linear 0s alternate forwards'
    alertMsg.innerHTML = `<p>${captilizeCase(text)}</p>`
    setTimeout(() => {
        alertMsg.style.animation = 'fade-out 1s linear 0s alternate forwards'
    }, 4000)
}

const fillGroups = (groups) => {
    groupTypes.innerHTML = ""
    for (const [key, value] of Object.entries(groups)) {
        groupTypes.innerHTML += `<a href="#" data-type="${key}">${captilizeCase(value)}</a>`
    }

    groupTypes.querySelectorAll('a').forEach(item => item.onclick = (e) => {
        e.preventDefault()
        fillTypes(item.dataset.type)
        sessionStorage.setItem('group', item.dataset.type)
        closeMenu()
    })
}

const fillTypes = (group) => {
    unitFrom.innerHTML = ""
    unitTo.innerHTML = ""

    copyLink.onclick = (e) => {
        const textToClipboard = `${location.origin}/?category=${group}`
        const temporaryText = document.createElement('input')
        temporaryText.value = textToClipboard
        document.body.appendChild(temporaryText)
        temporaryText.select()

        document.execCommand('copy')
        document.body.removeChild(temporaryText)
        const info = config.lang.form.info
        msg(info.copy, 'alert info')
    }
    
    groupTitle.removeChild(groupTitle.firstChild)
    groupTitle.innerHTML = sentenceCase(groups[group])
    groupTitle.appendChild(copyLink)

    
    for(const [key, value] of Object.entries(types[group])) {
        const option = `<option value="${key}" data-symbol="${value[1]}">${value[0]}</option>`
        unitFrom.innerHTML += option
        unitTo.innerHTML += option
    }
}

// navbar events
const openMenu = (e) => {
    e.preventDefault()
    navbar.style.display = "initial"
    navbar.style.animation = "show-menu 0.5s"
}

const closeMenu = (e) => {
    if (e)  
        e.preventDefault()
    navbar.style.animation = "hide-menu 0.5s"
    setTimeout(() => {
        navbar.style.display = "none"
    }, 500)
}

// search
const searchGroups = (e) => {
    e.preventDefault()
    
    const filteredGroup = {}
    const regex = new RegExp(`^(?=${searchMenu.value})`, 'i')
    console.log(regex)
    for (let [key, metric] of Object.entries(groups)) {
        // console.log(metric, regex.test(metric));
        // console.log(regex);
        if (regex.test(metric)) {
            filteredGroup[key] = metric
        }
    }
    console.log(filteredGroup)
    fillGroups(filteredGroup)
}

// form-conversor events
const validate = () => {
    const error = config.lang.form.error
    
    if(valueFrom.value === "") {
        msg(error.nullValue, 'alert error')
        return false
    }

    if (unitFrom.value === unitTo.value) {
        msg(error.sameUnits, 'alert error')
        return false
    }

    alertMsg.innerHTML = ""
    return true
}

// convert value and validade
const convert = (e) => {
    if(!validate()) return false
    
    resultBoard.style.display = 'flex'
    window.location.href = `#result-board`
    const nameFunc = `${unitFrom.value.toLowerCase()}To${captilizeCase(unitTo.value)}`
    console.log(nameFunc)
    const exec = returnConvert(nameFunc)
    const convertedValue = exec(parseFloat(valueFrom.value))

    const valueSymbol =  unitFrom.querySelector(`[value="${unitFrom.value}"]`).dataset.symbol
    const convertedSymbol =  unitTo.querySelector(`[value="${unitTo.value}"]`).dataset.symbol

    document.querySelector('#from-value').innerHTML = `${valueFrom.value} ${valueSymbol}`
    document.querySelector('#to-value').innerHTML = `${convertedValue} ${convertedSymbol}`
}

const defaultLanguage = () => {
    if (navigator == null) return 'en-US'
    
    switch(navigator.language.toLowerCase()) {
        default:
        case 'en-us':
            return 'en-US'
        case 'pt-br':
            return 'pt-BR'
    }
}

const selectLanguage = (e) => {
    e.preventDefault()
    
    if(languageOptions.dataset.status === "closed"){
        languageOptions.style.animation = "fade-in 0.5s linear 0s normal forwards"
        languageOptions.style.display = "initial"
    }
}

const setLanguage = (langCode, langImg) => {
    language.dataset.value = langCode
    language.src = langImg
    language.alt = langCode
    
    config.lang = defineLanguage({langCode})
    localStorage.setItem("language", langCode)
    localStorage.setItem("language-flag", langImg)
    translate()

    groups =  config.lang.group
    types =  config.lang.types
    fillGroups(groups)
    fillTypes(sessionStorage.getItem('group'))

    // define page language
    document.body.lang = langCode    
}

languageOptions.querySelectorAll("a").forEach(link => {
    link.onclick = (e) => {
        e.preventDefault()
        const {dataset} = link
        setLanguage(dataset.langcode, dataset.langimg)
        languageOptions.style.animation = "fade-out 0.5s linear 0s normal forwards"
        setTimeout(() => languageOptions.style.display = "none")
    }
})

// update text with language
const translate = () => {
    const l = config.lang
    metaDescription.setAttribute("content", sentenceCase(l.head.description))
    searchMenu.placeholder = sentenceCase(l.nav.searchPlaceholder)
    otherCategories.innerHTML = captilizeCase(l.form.otherCategories)
    lblValue.innerHTML = sentenceCase(l.form.value)
    valueFrom.placeholder = sentenceCase(l.form.valuePlaceholder)
    lblFrom.innerHTML = sentenceCase(l.form.from)
    lblTo.innerHTML = sentenceCase(l.form.to)
    btnConvert.innerHTML = sentenceCase(l.form.button)
    responsability.innerHTML = sentenceCase(l.footer.resposability)
}


// Dark Mode
const darkModeFunction = (e) => {
    e.preventDefault()
    const secondColor = getComputedStyle(root).getPropertyValue('--second-color')
    const thirdColor = getComputedStyle(root).getPropertyValue('--third-color')
    root.style.setProperty('--second-color', thirdColor)
    root.style.setProperty('--third-color', secondColor)
    localStorage.setItem('--second-color', thirdColor)
    localStorage.setItem('--third-color', secondColor)
    
}

const setup = () => {
    const config = {
        langCode: localStorage.getItem('language'),
        langImg: localStorage.getItem('language-flag')
    }

    // get params from url
    const params = getUrlParams(location.search)
    
    // get url param about lang
    if (params !== undefined && params.hasOwnProperty("langCode")) {
        config.langCode = params.langCode
        config.langImg = `./assets/img/${params.langCode}.png`
    }
    
    // check if the lang is set
    if (!config.langCode || !config.langImg) {
        // get the browser language
        config.langCode = defaultLanguage()
        config.langImg = `./assets/img/${config.langCode}.png`
        console.log(config.langCode, config.langImg);
        localStorage.setItem("language", config.langCode)
        localStorage.setItem("language-flag", config.langImg)
    } 

    // set the color previously choose
    if (!!localStorage.getItem('--second-color')) {
        let secondColor = localStorage.getItem('--second-color')
        let thirdColor = localStorage.getItem('--third-color')

        root.style.setProperty('--second-color', secondColor)
        root.style.setProperty('--third-color', thirdColor)
    }
    
    // category default
    let category = 'temperature'

    config.lang = defineLanguage(config)
    groups =  config.lang.group
    types =  config.lang.types

    if (params !== undefined && params.hasOwnProperty('category')) {
        category = groups.hasOwnProperty(params.category) ? params.category : category
    }
    
    sessionStorage.setItem('group', category)

    return config
}

// add events to listeners
btnOpenMenu.onclick = openMenu
btnCloseMenu.onclick = closeMenu
searchMenu.oninput = searchGroups
otherCategories.onclick = openMenu
// btnSearch.onclick = searchGroups
formConversor.onsubmit = e => e.preventDefault()
btnConvert.onclick = convert
language.onclick = selectLanguage
darkMode.onclick = darkModeFunction


const config = setup()
setLanguage(config.langCode, config.langImg)
translate()