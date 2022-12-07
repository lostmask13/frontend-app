import { useState, useContext, useEffect, useRef } from "react";
import NotificationContext from "./context/NotificationContext";

function ToDoList(props) {
    const { save, load } = props;
    const input = useRef('');
    const [items, setItems] = useState(JSON.parse(load()) ?? []);
    const ctx = useContext(NotificationContext);

    useEffect(() => {
        save(JSON.stringify(items));
    }, [items]);

    const addItem = (e) => {
        e.preventDefault();
        if (input.current.value === '') {
            ctx.error('Input is empty');
            return;
        }

        const newItems = [...items, { value: input.current.value, isDone: false }];
        setItems(newItems);
        input.current.value = '';
        input.current.blur();
        ctx.success('Item was added!');
    }

    const toggleComplete = (index) => {
        const newItems = [...items];
        newItems[index].isDone = !newItems[index].isDone;
        setItems(newItems);
        ctx.success('Item selected');
    }

    const deleteTodo = (itemIndex) => {
        const newItems = [...items].filter((item, index) => index !== itemIndex);
        setItems(newItems);
        ctx.success('Item deleted!');
    }

    const deleteAll = () => {
        setItems([]);
        ctx.success('All Items deleted!');
    }

    return (
        <div className='root'>
            <h1>TODO LIST1</h1>
            <div className='input-todo'>
                <form className="input-group" onSubmit={addItem} >
                    <input ref={input} type="text" className="form-control" placeholder='Input Todo' />
                    <div className="input-group-append">
                        <button className="add-btn">Add</button>
                    </div>
                </form>
            </div>

            {items?.length > 0 ? (
                <ul className='todo-list'>
                    <div className='todo' >
                        {items.map((item, index) => <Item key={index} toggle={() =>
                            toggleComplete(index)} deleteTodo={() => deleteTodo(index)} value={item.value}
                            isDone={item.isDone} />)}
                    </div>

                </ul >
            ) : (<div></div>)
            }

            <button className='delete-all-btn'
                onClick={() => {
                    deleteAll(Item);
                }}
            >Delete all</button>
        </div >
    );

}
function Item({ value, isDone, toggle, deleteTodo }) {
    return (
        <li className={`${isDone ? 'done' : ''}`}>
            <input onChange={toggle} checked={isDone} className="form-check-input me-1" type="checkbox" />
            {value}

            <button className='delete-btn'
                onClick={deleteTodo}
            >Delete</button>
        </li>
    );
}

export default ToDoList;