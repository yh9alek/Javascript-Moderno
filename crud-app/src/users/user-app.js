import { renderaAddButton } from "./presentation/render-add-button/render-add-button";
import { renderButtons } from "./presentation/render-buttons/render-buttons";
import { renderTable } from "./presentation/render-table/render-table";
import usersStore from "./store/users-store";

/**
 * 
 * @param {HTMLDivElement} element
 */
export const UsersApp = async (element) => {
    element.innerHTML = 'Loading...';
    await usersStore.loadNextPage();
    renderTable(element);
    renderButtons(element);
    renderaAddButton(element, () => { console.log('Desde el padre') });
}