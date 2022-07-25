import { observer } from 'mobx-react-lite';
import store from '../store/toDo';

const ToDoAdd = () => {

    const handleAddItem = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        store.addTodo();
    }

    return (
        <div className='addForm'>
            <form onSubmit={handleAddItem}>
                <input className='addForm__input' value={store.newTodo} onChange={(e) => (store.newTodo = e.target.value)}></input>
                <input className="addForm__btn" type="submit" value='Добавить' />
            </form>
        </div>
    )
}

export default observer(ToDoAdd);