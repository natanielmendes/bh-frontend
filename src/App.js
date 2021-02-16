import './App.css';
import CreateEvent from './components/event/CreateEvent';
import ListEvents from './components/event/ListEvents';

function App() {
  return (
    <div className="App">
      <main className="App-main">
        <div className="row">
          <CreateEvent></CreateEvent>
        </div>
        <div className="row">
          <ListEvents></ListEvents>
        </div>
      </main>
    </div>
  );
}

export default App;
