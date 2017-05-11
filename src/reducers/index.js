import * as actions from '../actions/index';
import update from 'immutability-helper';

const initialState = {

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
				]
}

export const todoReducer = (state=initialState, action) => {
	if(action.type === actions.ADD_ITEM) {
		return Object.assign({}, state, {
			items: [
				...state.items,
				{
					itemName: action.itemName,
					checked: false
				}
			]
		})
	} else if (action.type === actions.DELETE_ITEM) {
		return { 
			items:	[...state.items.slice(0, action.index),
					...state.items.slice(action.index + 1)
					]
		}	
	} else if (action.type === actions.CHECK_ITEM) {
		let isChecked = state.items[action.index].checked;
		if (!isChecked) {
			let updatedObj = update(state.items[action.index], { checked: {$set: true } });
			let newData = update(state.items, {$splice: [[action.index, 1, updatedObj]]});
			return { items: newData };
		}
		let updatedObj = update(state.items[action.index], { checked: {$set: false } });
		let newData = update(state.items, {$splice: [[action.index, 1, updatedObj]]});
		return { items: newData };
	}
	return state;
}