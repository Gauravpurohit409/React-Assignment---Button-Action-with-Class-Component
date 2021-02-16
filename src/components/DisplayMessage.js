import React, { Component } from 'react';

class DisplayMessage extends Component {

    constructor(props){
       super(props); 
    }

    render() {

        return (
        <div>
            {this.props.renderP ?
             <p id="para">"Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"</p>
             :
             ""}
        </div>
        );
    }
}

export default DisplayMessage;