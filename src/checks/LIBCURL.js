import { get } from '../util';

const CHECK_LIBCURL = async ({ url }) => {
    let libcurlContent = await get(url + '/libcurl.wasm');
    if (!libcurlContent) return { p: false };
    
    libcurlContent = libcurlContent.toLowerCase();

    return { p: libcurlContent.includes('libcurl/client/build/openssl-wasm') };
}

export default CHECK_LIBCURL;