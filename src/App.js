import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      
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
      <p>
        testingkljfksakdaldjasdjjsadjsalkdj
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
    return (<div>Current Time: {this.state.currentTime}</div>);
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
      <div>
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
      <header className='Footer-header'></header>
      <p>
        testingkljfksakdaldjasdjjsadjsalkdj
      </p>
    </div>
  );
}

export default App;