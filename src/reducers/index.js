import * as actions from '../actions/index';

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
	}
	return state;
}