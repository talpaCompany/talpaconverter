import * as english from "./lang.en.js"
import * as portuguese from "./lang.pt.js"
export default function defineLaguage(config) {
    let lang;
    switch (config.lang) {
        case 'en':
            lang = english.lang;
            break;
        case 'pt':
                lang = portuguese.lang;
                break;
        default:
            lang = english.lang;
    }
    
    return lang; 
}