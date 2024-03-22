import './render-add-button.css';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderaAddButton = (element) => {
    const fabButton = document.createElement('button');
    fabButton.innerText = '+';
    fabButton.classList.add('fab-button');

    element.append(fabButton);
    fabButton.addEventListener('click', e => {
        throw new Error('No implementado.');
    });
}