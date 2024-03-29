import { renderaAddButton } from "./presentation/render-add-button/render-add-button";
import { renderButtons } from "./presentation/render-buttons/render-buttons";
import { renderModal } from "./presentation/render-modal/render-modal";
import { renderTable } from "./presentation/render-table/render-table";
import usersStore from "./store/users-store";
import { saveUser } from "./use-cases/save-user";

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
    renderModal(element, async ( userLike ) => {
        const user = await saveUser(userLike);
        usersStore.onUserChange(user);
        renderTable();
    });
}