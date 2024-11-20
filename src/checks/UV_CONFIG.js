import { get } from '../util';

const CHECK_UV_CONFIG = async ({ url }) => {
    let uvConfigContent = await get(url + '/uv/uv.config.js');
    if (!uvConfigContent) return { p: false };
    
    uvConfigContent = uvConfigContent.toLowerCase();

    return { p: uvConfigContent.includes('ultraviolet') || uvConfigContent.includes('encodeurl') };
}

export default CHECK_UV_CONFIG;