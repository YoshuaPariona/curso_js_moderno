import html from './app.html?raw';
import todoStore, { Filters } from '../store/todo.store';
import { renderPending, renderTodos } from './use-cases';

const ElementIDs = {
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
    ClearCompleted: '.clear-completed',
    TodoFilters: '.filtro',
    PendingCountText: '#pending-count',
}

/**
 * 
 * @param {String} elementId 
 */
export const App = ( elementId ) => {

    const updatePendingCount = () => {
        renderPending(ElementIDs.PendingCountText);
    }

    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
        renderTodos( ElementIDs.TodoList, todos );
        updatePendingCount();
    }

    //Cuando la función App() es llamada
    ( () => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector( elementId ).append( app );
        displayTodos();
    }) ();

    //Referencias HTML
    const newDescriptionInput = document.querySelector( ElementIDs.NewTodoInput );
    const todoListUL = document.querySelector( ElementIDs.TodoList );
    const clearCompletedButton = document.querySelector( ElementIDs.ClearCompleted );
    const filtersLIs = document.querySelectorAll( ElementIDs.TodoFilters );

    //Listeners
    newDescriptionInput.addEventListener('keyup', ( event ) => {
        if( event.keyCode !== 13) return;//13 = enter
        if( event.target.value.trim().length === 0) return;
        
        todoStore.addTodo( event.target.value ) ;
        displayTodos();
        event.target.value = '';
    })

    todoListUL.addEventListener('click', (event) => {
        const element = event.target.closest('[data-id]');
        todoStore.toggleTodo(element.getAttribute('data-id'));
        displayTodos();
    })

    todoListUL.addEventListener('click', (event) => {
        const isDestroyElement = event.target.className === 'destroy';
        const element = event.target.closest('[data-id]');
        if( !element || !isDestroyElement ) return;
        todoStore.deleteTodo( element.getAttribute('data-id') );
        displayTodos();
    })

    clearCompletedButton.addEventListener('click', () => {
        todoStore.deleteCompleted();
        displayTodos();
    })

    filtersLIs.forEach( element => {
        element.addEventListener('click', (element) => {
            filtersLIs.forEach( el => el.classList.remove('selected') )
            element.target.classList.add('selected');
            switch(element.target.text) {
                case 'Todos':
                    todoStore.setFilter( Filters.All );
                    break;
                case 'Pendientes':
                    todoStore.setFilter( Filters.Pending );
                    break;
                case 'Completados':
                    todoStore.setFilter( Filters.Completed );
                    break;
            }
            displayTodos();
        });
    })

}