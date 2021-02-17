import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import CreateEvent from './components/event/CreateEvent';
import ListEvents from './components/event/ListEvents';
import Auxiliary from './hoc/Auxiliary/Auxiliary';

class App extends Component {

  state = {
    events: []
  }

  componentDidMount = () => {
    this.handleEventListUpdate();
  }

  handleEventListUpdate = () => {
    axios.get('http://localhost:3001/event').then((res) => {
      const fetchedEvents = [];
          for (let key in res.data) {
              fetchedEvents.push({
                  ...res.data[key],
                  key: res.data[key]._id
              });
          }
      this.setState({events: fetchedEvents});
    });
  }

  render() {
    return (
      <Auxiliary>
        <div className="App">
          <main className="App-main">
            <div className="row">
              <CreateEvent handleEventListUpdate={this.handleEventListUpdate}></CreateEvent>
            </div>
            <div className="row">
              <ListEvents eventsList={this.state.events}></ListEvents>
            </div>
          </main>
        </div>
      </Auxiliary>
    );
  }
    
}

export default App;
