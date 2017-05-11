import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import TodoApp from './components/todoApp';
import './index.css';

console.log(store.getState());

ReactDOM.render(
  	<Provider store={store}>
  		<TodoApp />
  	</Provider>,
  document.getElementById('root')
);
