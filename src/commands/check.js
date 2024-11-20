import checkManager from '../checks/CheckManager';

import { get } from '../util';

export default async (url) => {
    await checkManager.waitForChecks();

    const flaggedChecks = [];

    let landing = await get(`${url}/`);
    if (!landing) return console.log(`[!] "${url}" failed to load.`);

    await Promise.all(Object.entries(checkManager.checks).map(async ([name, check]) => {
        let checkResult = await check({ url, landing });

        if (checkResult.p === true) return flaggedChecks.push(name);
        else if (checkResult.p === false) return;
        else return console.log(`Check ${name} failed on ${url}.`);
    }));

    if (flaggedChecks.length) console.log(`[CONFIRM] "${url}" flags checks`, flaggedChecks);
    else console.log(`[!] [CLEARED] "${url}" failed all checks.`);
};