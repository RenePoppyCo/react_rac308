import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Header />
      <LeftColumn />
      <RightColumn />
      <Footer />   
    </div>    
  );
}

// component for Header
function Header(){
  return (
    <div className='Header'>
      <header className='Header-header'></header>
      <img src={`https://i.redd.it/ux74bsifrpda1.jpg`} className="cat" alt="melvin" />
      <p>
        melvin
      </p>
    </div>
  );
}

// component for LeftColumn which will displating time
class LeftColumn extends React.Component {
  constructor(props){
    super(props);
    this.state = {currentTime: new Date().toLocaleTimeString()}
  }

  componentDidMount(){
    this.timerID = setInterval(() => this.tick(), 1000); // set interval once the componenent is rendered :P
  }

  tick = () => {
    this.setState({
      currentTime: new Date().toLocaleTimeString(),
    });
  }

  render(){
    return (<div className='LeftColumn'>Current Time: {this.state.currentTime}</div>);
  }
}

// component for RightColumn which will show the amt of clicks made on the button
class RightColumn extends React.Component {
  constructor(props){
    super(props);
    this.state = {clicks: 0};
  }

  clicked = () => {
    this.setState((prevState) => ({
      clicks: prevState.clicks + 1,
    }));
  };

  render(){
    return(
      <div className='RightColumn'>
        <button onClick={this.clicked}>
          Click Here!!!
        </button>

        <p>Here's how much clicks you've made: {this.state.clicks} </p>
      </div>
      );
  }
}

// component for Footer
function Footer(){
  return (
    <div className='Footer'>
      <img src={`https://i.pinimg.com/736x/ae/f3/13/aef3134e3ead9064a4f07cffd4689659.jpg`} className="cat-party" alt="cat party" />
      <p>
        happy b-day
      </p>
    </div>
  );
}

export default App;