import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './index.css';
import Todos from './features/todos';
import registerServiceWorker from './registerServiceWorker';

import store from './redux/store';


ReactDOM.render(<Provider store={store}>
                  <Todos />
                </Provider>, document.getElementById('todo'));
registerServiceWorker();
