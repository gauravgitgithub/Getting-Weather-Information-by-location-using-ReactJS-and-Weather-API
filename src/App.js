import React, { Component } from 'react';
import Titles from './components/Titles';
import Weather from './components/Weather';
import Form from './components/Form';
import './App.css';



class App extends Component {
  state = {
    temperature : '',
    city : '',
    country : '',
    humidity : '',
    desc : '',
    error : ''
  }
  
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d859ddd99e51ea7287a2497ee1ff9aaa`);
    const data = await api_call.json();
    if(city)
    {
         console.log(data);
      this.setState({
      temperature : data.main.temp,
      city : data.name,
      country : data.sys.country,
      humidity : data.main.humidity,
      description : data.weather[0].description,
      error : ''

    });

    }
    else{
      console.log(data);
      this.setState({
      temperature : undefined,
      city : undefined,
      country : undefined,
      humidity : undefined,
      description : undefined,
      error : "Enter Value first ..."

    });

    }
   

  
  }

  render() {

    return (
      <div className="App">
      <Titles />
      <Form getWeather={this.getWeather} />
      <Weather 
      temperature = {this.state.temperature}
      city = {this.state.city}
      country = {this.state.country}
      humidity = {this.state.humidity}
      description = {this.state.description}
      error = {this.state.error}
      />
        
      </div>
    );
  }
}

export default App;
