import React from 'react';
import TodoItem from './todoItem'; 

export default function TodoList(props) {
		const renderedList = props.items.map(function (item, index) {
			return <TodoItem key={index} itemName={item.itemName} />
		}) 
		return (
			<div className="todo-list">
				{renderedList}
			</div>
		);
}