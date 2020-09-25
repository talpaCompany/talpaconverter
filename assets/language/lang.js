import * as english from "./lang.en.js"
import * as portuguese from "./lang.pt.js"
export default function defineLaguage(config) {
    let lang;
    switch (config.langCode) {
        default:
        case 'en-US':
            lang = english.lang;
            break;
        case 'pt-BR':
            lang = portuguese.lang;
            break;
    }
    
    return lang; 
}