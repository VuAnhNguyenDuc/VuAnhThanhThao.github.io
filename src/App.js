import NavBar from './components/navbar/NavBar';
import MainBodySection from './components/mainbody/MainBodySection';
import React, { useState, useEffect } from "react";
import axios from 'axios';

export default class App extends React.Component {
  state = { data: {} }

  componentDidMount() {
    const data_url = process.env.REACT_APP_DATA_HOST;

    axios.get(data_url)
      .then(response => {
          var data = response.data;
          this.setState({
            data: data
          });
      });
  }

  render(){
    return (
      <div className="App">
        {/* NavBar Start */}
        <NavBar data={this.state.data} />
        {/* NavBar End */}
  
        {/* Main Body Start */}
        <MainBodySection data={this.state.data} />
        {/* Main Body End */}
      </div>
    );
  }
}
