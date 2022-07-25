import { makeAutoObservable } from "mobx";

export interface Todo {
    [x: string]: any;
    id: number,
    text: string,
    done: boolean,
}

const removeTodo = (todos: Todo[], id: number): Todo[] => todos.filter((todo) => todo.id !== id)

const addTodo = (todos: Todo[], text: string): Todo[] => [
    ...todos,
    {
        id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
        text,
        done: false,
        edit: false,
    },
];


class Store {
    todos: Todo[] = [];
    todosStore: Todo[] = [];
    todosTemporary: Todo[] = [];
    newTodo: string = '';

    constructor() {
        makeAutoObservable(this);
    }

    addTodo() {
        this.todos = addTodo(this.todos, this.newTodo);
        this.todosStore = this.todos;
        this.newTodo = '';
    }

    removeTodo(id: number) {
        this.todos = removeTodo(this.todos, id);
        this.todosStore = this.todos;
    }
}
const store = new Store();

export default store;