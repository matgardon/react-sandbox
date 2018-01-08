import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './containers/TodoApp';
import TodoModel from './models/todoModel';
import registerServiceWorker from './utils/registerServiceWorker';

var model = new TodoModel('react-todos');

//TODO MGA: register listener model.subscribe : render function ??? WTF 

ReactDOM.render(<TodoApp model={model} />, document.getElementById('root'));

registerServiceWorker();
