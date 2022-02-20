import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = { todos: [] };

  async componentDidMount() {
    let result = await axios.get("https://jsonplaceholder.typicode.com/todos");
    await new Promise(x => setTimeout(x, 1000));
    this.setState({ todos: result.data });
  }
  render() {
    return (
      <div className="container">
        
      </div>
    )
  }
}

export default App;
