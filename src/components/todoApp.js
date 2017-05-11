import React from 'react';
import { connect } from 'react-redux';
// import update from 'immutability-helper';
import TodoInput from './todoInput';
import TodoList from './todoList';

export class TodoApp extends React.Component {
	render() {
		return (
			<div>
				<TodoInput />
				<TodoList  items={this.props.items} />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	items: state.items
})

export default connect(mapStateToProps)(TodoApp)