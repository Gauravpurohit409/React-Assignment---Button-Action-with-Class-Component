import React, {Component, useState} from "react";
import { render } from "react-dom";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);

		this.state = ({
			visibility : "none",
		})
	}
	
    render() {
    	return(
    		<div id="main">
				{ /* Do not remove this main div!! */ }
				<p id= "para" style = {{display: this.state.visibility}}>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
				<button id = "click" onClick ={() =>{
					this.setState({
						visibility : "block",
					});

				}}>Click!</button>
    		</div>
    	);
    }
}


export default App;


