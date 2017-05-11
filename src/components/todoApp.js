import React from 'react';
import update from 'immutability-helper';
import TodoInput from './todoInput';
import TodoList from './todoList';

export default class TodoApp extends React.Component {
	constructor(props){
		super(props);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleItemSubmit = this.handleItemSubmit.bind(this);
		this.handleItemEvent = this.handleItemEvent.bind(this);
		this.state = {

		items:	[
					{ 
						itemName: "Pick Up The Kids",
						checked: false 
					},
					{ 
						itemName: "Get Groceries",
						checked: false
					},
					{ 
						itemName: "Attend School",
						checked: false
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

	handleItemEvent (e) {
		e.preventDefault();
		
		let classes = e.target.className.split(' ');
		let itemId = e.target.id;
		let checkedValue = this.state.items[itemId].checked;

		if (classes.includes("delete")) {
			let newData = update(this.state.items, {$splice: [[itemId, 1]]});
			return this.setState({ items: newData });
		}
		
		if (!checkedValue) {
			let updatedObj = update(this.state.items[itemId], { checked: {$set: true } });
			let newData = update(this.state.items, {$splice: [[itemId, 1, updatedObj]]});
			return this.setState({ items: newData });
		}

		let updatedObj = update(this.state.items[itemId], { checked: {$set: false } });
		let newData = update(this.state.items, {$splice: [[itemId, 1, updatedObj]]});
		return this.setState({ items: newData });
	}

	render() {
		return (
			<div>
				<TodoInput value={this.state.item} onChange={this.handleInputChange} onSubmit={this.handleItemSubmit} />
				<TodoList items={this.state.items} onClick={this.handleItemEvent} />
			</div>
		);
	}

}