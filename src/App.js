import './App.css';
import { Component } from 'react';
import axios from 'axios';
import Loading from './Components/Loading';

class App extends Component {
  state = { todos: [] };

  async componentDidMount() {
    let result = await axios.get("https://jsonplaceholder.typicode.com/todos");
    await new Promise(x => setTimeout(x, 1000));
    this.setState({ todos: result.data });
  }
  render() {
    return (
      <div className="container mt-2">
        {this.state.todos.length > 0 ?(
        <ul className="list-group">
          {this.state.todos.map(todo => (
          <li id={todo.completed ? 'yapildi' : ""} className="list-group-item d-flex justify-content-between align-items-center">
            {todo.title}
            <span>
            <input type="checkbox" checked={todo.completed}/>
            </span>
          </li>
          ))}
        </ul>
        ) : (
          <Loading/>
        )
      }
      </div>
    )
  }
}

export default App;
