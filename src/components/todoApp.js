import React from 'react';
import TodoInput from './todoInput';
import TodoItem from './todoItem';

export default class TodoApp extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div>
				<TodoInput/>
				<TodoItem itemName="Pick Up the kids"/>
			</div>
		);
	}

}