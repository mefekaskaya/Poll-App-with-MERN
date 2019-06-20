import React from 'react';
import { render } from 'react-dom';

import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

render(<App />, document.getElementById('root'));

serviceWorker.register();
