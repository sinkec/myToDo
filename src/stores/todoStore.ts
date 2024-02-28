// Description: Store for todo.
import { writable, get } from "svelte/store";
import type { Todo } from "$lib/types/todo";
import { v4 as uuidv4 } from 'uuid';

export const todoStore = writable<Todo[]>([]);


// Function to add a todo to the store.
export function addTodo(input: Todo) {
    let todos: Todo[] = get(todoStore);

    todoStore.update(() => [{ ...input, id: uuidv4() }, ...todos]);
};


// Function to remove a todo from the store. Splice and indexOf becuse its faster than filter. 
//Deletes first instance of the todo and doesnt check other instances.
export function deleteTodo(input: Todo) {
    let todos: Todo[] = get(todoStore);
    todos.splice(todos.indexOf(input), 1);
    todoStore.set(todos);
};

// Function to change status of a todo. Every time a todo is clicked, it changes status. and everything is passed by reference.
export function changeTodoStatus(input: Todo) {
    let todos: Todo[] = get(todoStore);
    input.completed = !input.completed;
    todoStore.set(todos);


}





