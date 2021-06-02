import './styles.css';
import { Todo, TodoList } from './classes';

const todoList = new TodoList()

const tarea1 = new Todo ( 'Aprender Python' );
const tarea2 = new Todo ( 'Aprender Node' );
const tarea3 = new Todo ( 'Aprender MongoDB' );

todoList.nuevoTodo( tarea1 );
todoList.nuevoTodo( tarea2 );
todoList.nuevoTodo( tarea3 );

console.log( todoList );
