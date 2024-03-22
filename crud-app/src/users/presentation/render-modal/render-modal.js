import html from './render-modal.html?raw';
import './render-modal.css';

let modal;

export const showModal = () => {
    modal?.classList.remove('hide-modal');
}

export const hideModal = () => {
    modal?.classList.add('hide-modal');
}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderModal = (element) => {
    if(modal) return;
    modal = document.createElement('div');
    modal.innerHTML = html;
    modal.className = 'modal-container hide-modal';

    form = modal.querySelector('form');

    modal.addEventListener('click', e => {
        if(e.target.className === 'modal-container') {
            hideModal();
        }
    });

    form.addEventListener('submit', e => {
        e.preventDefault();
    });

    element.append(modal);
}