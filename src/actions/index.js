export const ADD_ITEM = 'ADD_ITEM';
export const addItem = itemName => ({
	type: ADD_ITEM,
	itemName
})

export const DELETE_ITEM = 'DELETE_ITEM';
export const deleteItem = index => ({
	type: DELETE_ITEM,
	index
})

export const CHECK_ITEM = 'CHECK_ITEM';
export const checkItem = index => ({
	type: CHECK_ITEM,
	index
})