import './render-buttons.css';
import usersStore from "../../store/users-store";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderButtons = (element) => {
    const nextButton = document.createElement('button');
    nextButton.innerText = 'Next >';
    const previuosButton = document.createElement('button');
    previuosButton.innerText = '< Prev';

    const currentPageLabel = document.createElement('span');
    currentPageLabel.id = 'current-page';
    currentPageLabel.innerText = usersStore.getCurrentPage();

    element.append(previuosButton, currentPageLabel, nextButton);
}