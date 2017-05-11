import React from 'react';
import TodoItem from './todoItem'; 

export default function TodoList(props) {
		const renderedList = props.items.map(function (item, index) {
			
			if (!item.checked) {
				return (<TodoItem 
						key={index}
						id={index} 
						itemName={item.itemName} 
						/>
				);
			}

			return (
				<TodoItem 
				key={index}
				id={index} 
				itemName={item.itemName} 
				checked="checked"
				/>
			);
			
		}) 
		return (
			<div className="todo-list">
				{renderedList}
			</div>
		);
}