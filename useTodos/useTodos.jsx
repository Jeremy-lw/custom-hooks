import { useReducer, useEffect } from "react";
import { todoReducer } from "./todoReducer";

const init = () => {
    //const todos = localStorage.getItem('todos');
    //return todos ? JSON.parse(todos) : [];
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {    

    const [ todos, dispatchTodo ] = useReducer( todoReducer, [], init );

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
      
    }, [todos])

    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] add Todo',
            payload: todo,
        }

        dispatchTodo(action);
    }

    const handleDeleteTodo = ( id ) => {
        dispatchTodo({
            type: '[TODO] remove Todo',
            payload: id,
        });
    }   

    const handleToggleTodo = ( id ) => {
        dispatchTodo({
            type: '[TODO] toggle Todo',
            payload: id,
        });
    }

    const todosCount = () => todos.length;
    const pendingTodosCount = () => todos.filter(todo => !todo.done).length;
    
    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount,
        pendingTodosCount,
    }
}
