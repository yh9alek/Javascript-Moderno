import { createTodoHTML } from "./";

/**
 * 
 * @param {Stirng} elementId 
 * @param {Array<Todo>} todos 
 */
export const renderTodos = (elementId, todos = []) => {
    //TODO: referencia 
    const element = document.querySelector(elementId);
    todos.forEach(todo => {
        element.append(createTodoHTML(todo));
    });
};