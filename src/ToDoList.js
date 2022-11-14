import { useState } from 'react';

function ToDoList() {
	const [input, setInput] = useState('');
	const [items, setItems] = useState([]);

	const onInputChange = (e) => {
		setInput(e.target.value);
	}

	const addItem = (e) => {
		e.preventDefault();
		if (input === '') {
			return;
		}

		const newItems = [...items, { value: input, isDone: false }];
		setItems(newItems);
		setInput('');
	}

	const toggleComplete = (index) => {
		const newItems = [...items];
		newItems[index].isDone = !newItems[index].isDone;
		setItems(newItems);
	}

	const deleteTodo = (itemIndex) => {
		const newItems = [...items].filter((item, index) => index !== itemIndex);
		setItems(newItems);
	}

	const deleteAll = () => {
		setItems([]);
	}

	return (
		<div className='root'>
			<h1>TODO LIST1</h1>
			<div className='input-todo'>
				<form className="input-group" onSubmit={addItem} >
					<input onChange={onInputChange} value={input} type="text" className="form-control" placeholder='Input Todo' />
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