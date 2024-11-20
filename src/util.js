export const get = (url) => new Promise((resolve, reject) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1000);

    fetch(url, { signal: controller.signal }).then(response => response.text()).then(data => {
        clearTimeout(timeoutId);
        resolve(data);
    }).catch(() => {
        clearTimeout(timeoutId);
        resolve(null);
    });
});