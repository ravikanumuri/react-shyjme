import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      status: true,      
    };
  }

  toggleHandle = () => {
    this.setState({
      status: !this.state.status
    })
  }
  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Click the Button to Test the Text
        </p>

        <button onClick={ this.toggleHandle }> { this.state.status ? 'ON' : 'OFF' } </button>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
