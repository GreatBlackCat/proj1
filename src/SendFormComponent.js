import React, { Component } from 'react'
import { Button } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';


export default class SendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
      this.setState({value: event.target.value});
  }


  render() {
    return (
      <div>
        <form METHOD = "POST" ACTION ={"mailto:"+this.state.value} ENCTYPE="text/plain">
        <p>имя :</p>
        <input NAME='data1' TYPE="text" VALUE = "" />
         <p>почта :</p>
        <input NAME = "Mail" TYPE = "email" VALUE ={this.state.value} onChange={this.handleChange} />
        <p>номер телефона :</p>
        <input NAME = "data3" TYPE = "text" VALUE = "" />
        <input NAME='Sum' TYPE="text" VALUE = "23442" hidden disabled />
            
            <Button variant="contained" className='SendBtn' TYPE="submit" color="primary" endIcon={<Icon>send</Icon>}>
            Send
            </Button>
            </form>
      </div>
    )
  }
}
