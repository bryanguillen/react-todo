import React from 'react';

export default function TodoItem (props) {
	return (
		<div className="item">
			<h1 className={props.checked}>{props.itemName}</h1>
			<button className="check action" id={props.id} onClick={props.onClick}>Check</button>
			<button className="delete action" id={props.id} onClick={props.onClick}>Delete</button>
		</div>
	);
}