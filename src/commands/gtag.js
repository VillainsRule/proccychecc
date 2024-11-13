import { BANNED_GTAGS } from '../constants.js';

const get = (url) => fetch(url).then(u => u.text());

export default (url) => {
    get(url).then((data) => {
        let regex = /https:\/\/www.googletagmanager.com\/gtag\/js\?id=(G-[A-Z0-9]{5,15})['"]/;
        let match = data.match(regex);
        
        if (match && !BANNED_GTAGS.includes(match[1])) console.log(`🚨 🚨 🚨 🚨 FOUND GTAG ON ${url} !!! "${match[1]}"`);
        else if (match) console.log(`found a gtag but it's already bled`);
        else console.log(`>>> ${url} has NO GTAGS!!!`);
    }).catch(() => {
        console.log('url down', url);
    })
};