export const BANNED_GTAGS = [
    'G-WKJQ5QHQTJ', // https://gointerstellar.app
    'G-3DTW1KTNCF', // https://gointospace.app
    'G-RD0VC48YMW', // https://utopiaweb.org

    // sites flagged by other flags but here for the lulz
    'G-0GR0HN1RFL', // https://radon.games
    'G-P1JX4G9KSF', // https://aluu.xyz
    'G-QDSZE0VTXD', // https://shuttleproxy.com
    'G-BW3SZSE47T', // https://definitelyscience.com
    'G-ZT64FYRXR6', // https://phantomgames.dev
]

const CHECK_GTAG = ({ landing }) => {
    let flagged = false;

    BANNED_GTAGS.forEach((tag) => {
        if (landing.includes(`https://www.googletagmanager.com/gtag/js?id=${tag}`)) flagged = true;
    });

    return { p: !!flagged };
}

export default CHECK_GTAG;