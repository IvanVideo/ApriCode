import './style.scss';
import ToDoAdd from './components/ToDoAdd';
import ToDoListItemsOserver from './components/ToDoList';
import store from './store/toDo';

function App() {

  const doneItems = () => {
    store.todos = store.todosStore.filter((item) => item.done === true);
  }

  const notDoneItems = () => {
    store.todos = store.todosStore.filter((item) => item.done === false);
  }

  const allItems = () => {
    store.todos = store.todosStore;
  }

  return (
    <div className='app'>
      <h1 className='app__title'>Список задач на лето</h1>
      <div className='app__box'>
        <p className='app__filter' onClick={doneItems}>Выполненные</p>
        <p className='app__filter' onClick={notDoneItems}>Невыполненные</p>
        <p className='app__filter' onClick={allItems}>Все</p>
        <p></p>
      </div>
      <ToDoAdd />
      <ToDoListItemsOserver />
    </div>
  );
}

export default App;