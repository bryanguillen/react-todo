import React from 'react';
import TodoInput from './todoInput';
import TodoList from './todoList';

export default class TodoApp extends React.Component {
	constructor(props){
		super(props);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleItemSubmit = this.handleItemSubmit.bind(this);
		this.state = {

		items:	[
					{ 
						itemName: "Pick Up The Kids" 
					},
					{ 
						itemName: "Get Groceries"
					},
					{ 
						itemName: "Attend School"
					}
				],
		item: ''
		}
	}

	handleInputChange (e) {
		this.setState({ item: e.target.value });
	}

	handleItemSubmit (e) {
		e.preventDefault();
		this.setState({ 
			items: this.state.items.concat([{ itemName: this.state.item }]),
			item: '' 
		})
	}

	render() {
		return (
			<div>
				<TodoInput value={this.state.item} onChange={this.handleInputChange} onSubmit={this.handleItemSubmit} />
				<TodoList items={this.state.items} />
			</div>
		);
	}

}