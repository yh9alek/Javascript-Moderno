import html from './render-modal.html?raw';
import './render-modal.css';

let modal;

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderModal = (element) => {
    if(modal) return;
    modal = document.createElement('div');
    modal.innerHTML = html;
    modal.className = 'modal-container';
    element.append(modal);
}