import React, { Component } from 'react';


class Form extends Component {
  render() {
    return (
      <div className="Form">
      <form name="f1" onSubmit={this.props.getWeather} >
      <input type="text" placeholder="City" name="city" />
      <input type="submit" value="Get Weather" />

      </form>
      </div>
    );
  }
}

export default Form;
