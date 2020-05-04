import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Home } from './route';

class App extends React.Component{
	render(){
			return(
				<Home />
			)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))