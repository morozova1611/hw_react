import './App.css';
import FirstComponent from './components/FirstComponent/FirstComponent';
import Counter from './components/Counter/Counter';

function App() {
  return (
    <div className="App">
      <Counter />
      <h1>
        hello
      </h1>
      <FirstComponent userName={'Eva'} />
    </div>
  );
}

export default App;
