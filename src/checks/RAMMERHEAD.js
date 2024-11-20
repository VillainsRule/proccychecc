import { get } from '../util';

const CHECK_RAMMERHEAD = async ({ landing, url }) => {
    if (landing.includes('<h1>Rammerhead Proxy</h1>')) return { p: true };

    let rhContent = await get(url + '/CHANGELOG.md');
    if (!rhContent) return { p: false };

    return { p: rhContent.includes('rammerhead protocol') };
}

export default CHECK_RAMMERHEAD;