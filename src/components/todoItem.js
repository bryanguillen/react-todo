import React from 'react';
import { connect } from 'react-redux';
import { deleteItem } from '../actions/index';
import { checkItem } from '../actions/index';

export class TodoItem extends React.Component {

	checkItem (index) {
		this.props.dispatch(checkItem(index));
	}

	deleteItem (index) {
		this.props.dispatch(deleteItem(index));
	}

	render() {
		return (
			<div className="item">
				<h1 className={this.props.checked}>{this.props.itemName}</h1>
				<button className="check action" id={this.props.id} 
				onClick={ e => {
					e.preventDefault();
					let itemId = e.target.id;
					this.checkItem(itemId);
				}}>Check</button>
				<button className="delete action" id={this.props.id} 
				onClick={ e => {
					e.preventDefault();
					let itemId = e.target.id;
					this.deleteItem(itemId);
				}}>Delete</button>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	items: state.items
})

export default connect(mapStateToProps)(TodoItem) 