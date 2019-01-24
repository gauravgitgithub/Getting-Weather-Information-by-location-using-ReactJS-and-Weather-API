import React, { Component } from 'react';

class Weather extends Component {
  render() {
    return (
      <div className="Weather">
      <div>
          {this.props.city && <p>City = { this.props.city}</p>}
          {this.props.country && <p>Country = { this.props.country}</p> }
          {this.props.temperature && <p>Temperature = { this.props.temperature}</p>} 
          {this.props.humidity && <p>Humidity = { this.props.humidity}</p>}
          {this.props.description && <p>Description = { this.props.description}</p>}
          {this.props.error && <p> { this.props.description}</p>}

      </div>
        
      </div>
    );
  }
}

export default Weather;
