import React, {Component, useState} from "react";
import { render } from "react-dom";
import '../styles/App.css';
import DisplayMessage from "./DisplayMessage";

class App extends Component {
    constructor(props) {
		super(props);

		this.state = ({
			renderP :false,
		})
	}
    render() {
    	return(
    		<div id="main">
				{ /* Do not remove this main div!! */ }
				<button id = "click" onClick={()=>{
					this.setState({
						renderP : true,
					});
				}}>Click!</button>
					<DisplayMessage renderP = {this.state.renderP}/>
					
    		</div>
    	);
    }
}


export default App;


