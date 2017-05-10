import React from 'react';

export default function TodoInput(props) {
	return (
		<div className="input-container">
			<input id="item" type="text" placeholder="Pick Up The Kids" onChange={props.onChange} />
			<button>Submit</button>
		</div>
	);
}