import { observer } from 'mobx-react-lite';
import store, { Todo } from '../store/toDo';
import remove from '../images/remove.svg';
import done from '../images/done.svg';

const ToDoList = () => {
    const handleDoneItem = (todo: Todo) => {
        todo.done = !todo.done;
    }

    return (
        <>
            {
                store.todos.map((todo: Todo) => (
                    <div className='todoItem' key={todo.id}>
                        <div className='todoItem__box'>
                            {
                                todo.done ?
                                    <img className='todoItem__img_done' src={done} alt='done' />
                                    : null
                            }
                            <p className='todoItem__text'>{todo.text}</p>

                        </div>
                        <div className='todoItem__menu'>
                            <input title='статус' className='todoItem__checkbox' type='checkbox' onClick={() => handleDoneItem(todo)} />
                            <button className='todoItem__btn' onClick={() => store.removeTodo(todo.id)}>
                                <img title='удалить' className='todoItem__img' src={remove} alt='remove' />
                            </button>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

const ToDoListItemsOserver = observer(ToDoList);

export default ToDoListItemsOserver;