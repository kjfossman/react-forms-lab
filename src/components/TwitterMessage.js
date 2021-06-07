import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "Default"
    };
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  remainingChar = () => {
    return (
    this.props.maxChars - this.state.message.length 
    )
  }

  render() {
    let charNumber = this.props.maxChars - this.state.message.length 
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleChange(event)} value={this.state.message} />
        <span>{charNumber} characters left  Max chars: {this.props.maxChars}</span>
      </div>
    );
  }
}

export default TwitterMessage;
