const check = async (url) => {
    let arg = process.argv[2];

    if (arg === 'gtag') (await import('./commands/gtag.js')).default(url);
    else if (arg === 'check') (await import('./commands/check.js')).default(url);
    else console.log(`Invalid option. View the project README for more information. https://github.com/VillainsRule/proccychecc`);
}

// Flagged by UV_CONFIG
check('https://aluu.xyz');
check('https://definitelyscience.com');
check('https://radon.games');
check('https://kazwire.com');
check('https://anura.pro');
check('https://dogesurf.app');
check('https://artclass.site');
check('https://phantomgames.dev');
check('https://extrememath.app');
check('https://holyubofficial.net');
check('https://shuttleproxy.com');
check('https://holyunblocker.org');
check('https://incog.works');
 
// Flagged by GTAG
check('https://gointerstellar.app');
check('https://gointospace.app');
check('https://utopiaweb.org');

// Flagged by Rammerhead
check('https://direct.rammerhead.org');
check('https://demo-opensource.rammerhead.org');