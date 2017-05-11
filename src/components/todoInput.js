import React from 'react';

export default function TodoInput(props) {
	return (
		<div className="input-container">
			<form onSubmit={props.onSubmit} className="item-form">
				<input onChange={props.onChange} value={props.value} id="item" type="text" placeholder="Pick Up The Kids" />
				<button type="submit" value="Submit" className="submit-item">Submit</button>
			</form>
		</div>
	);
}