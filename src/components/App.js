import React, {Component, useState} from "react";
import { render } from "react-dom";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);

		this.state = ({
			visibility : "none",
			render :true,
		})
	}
	
    render() {
    	return(
    		<div id="main">
				{ /* Do not remove this main div!! */ }
				{/* <p id= "para" style = {{display: this.state.visibility}}>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p> */}
				<button id = "click" onClick ={() =>{
					if (this.state.render === true )
					{
						const main = document.querySelector("#main");
						const p = document.createElement("p");
						p.setAttribute("id","para");
						p.innerHTML = "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"; 
						main.appendChild(p);
						this.setState({
							render : false,
						})
					}
				}}>Click!</button>
    		</div>
    	);
    }
}


export default App;


