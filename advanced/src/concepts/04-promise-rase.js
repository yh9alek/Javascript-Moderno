/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseRaseComponent = (element) => {

    element.innerHTML = 'Loading...';

    const renderValue = (value) => {
        element.innerHTML = value;
    }

    Promise.race([
        slowPromise(),
        fastPromise(),
        mediumPromise(),
    ]).then(renderValue);
}

const slowPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Slow Promise');
    }, 2000);
});

const mediumPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Medium Promise');
    }, 1500);
});

const fastPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Fast Promise');
    }, 1000);
});