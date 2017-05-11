import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions/index.js';

let TodoInput = ({dispatch}) => {
	let input;
	return (
		<div className="input-container">
			<form onSubmit={e => {
				e.preventDefault();
				if (!input.value.trim()) {
					return
				}
				dispatch(addItem(input.value));
				input.value = '';
			}} 
			className="item-form">
				<input 
				ref={node => { 
					input = node
				}} 
				id="item" 
				type="text" 
				placeholder="Pick Up The Kids" />
				<button type="submit" value="Submit" className="submit-item">Submit</button>
			</form>
		</div>
	);
}

TodoInput = connect()(TodoInput);

export default TodoInput