import { loadUsersByPage } from "../use-cases/load-users-by-page";

const state = {
    currentPage: 0,
    users: [],
}

const loadNextPage = async () => {
    const users = await loadUsersByPage(state.currentPage + 1);
    if(users.length === 0) return;

    state.currentPage += 1;
    state.users = users;
}

const loadPreviousPage = async () => {
    if(state.currentPage === 1) return;
    const users = await loadUsersByPage(state.currentPage - 1);

    state.currentPage -= 1;
    state.users = users;
}

// TODO: Implementar
const onUserChange = () => {
    throw new Error('No implementado.');
}

const reloadPage = async () => {
    throw new Error('No implementado.');
}

export default {
    loadNextPage,
    loadPreviousPage,
    onUserChange,
    reloadPage,

    getUsers: () => [...state.users],
    getCurrentPage: () => state.currentPage,
};