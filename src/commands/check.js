import { BANNED_GTAGS } from '../constants.js';

const get = (url) => fetch(url).then(u => u.text());

export default (url) => {
    let proxy = false;

    let isProxy = (check) => {
        console.log(`${url} is a proxy. Flagged: ${check}`);
        proxy = true;
    };

    let totalChecks = 4;
    let checksDone = 0;

    let doCheck = () => {
        checksDone++;
        if (checksDone === totalChecks && !proxy) console.log(`[N] ${url} is NOT a proxy!`);
    }

    Promise.all([
        // GTAG
        get(url).then((data) => {
            BANNED_GTAGS.forEach((tag) => (data.includes(`https://www.googletagmanager.com/gtag/js?id=${tag}`)) && isProxy('GTAG'));
            doCheck();
        }),

        // UV_CONFIG
        get(url + '/uv/uv.config.js').then((data) => {
            data = data.toLowerCase();

            if (data.includes('ultraviolet') || data.includes('encodeurl')) isProxy('UV_CONFIG');
            else doCheck();
        }).catch(() => doCheck()),

        // RAMMERHEAD
        get(url + '/hammerhead.js').then((data) => {
            if (data.includes('rammerheadAncestorOrigins')) isProxy('RAMMERHEAD');
            else doCheck();
        }).catch(() => doCheck()),

        // LIBCURL
        get(url + '/libcurl.wasm').then((data) => {
            if (data.includes('libcurl/client/build/openssl-wasm')) isProxy('LIBCURL');
            else doCheck();
        })
    ]);
};