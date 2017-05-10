import React from 'react';

export default function TodoItem (props) {
	return (
		<div className="item">
			<h1>{props.itemName}</h1>
			<button className="check action">Check</button>
			<button className="delete action">Delete</button>
		</div>
	);
}