import './App.css';
import Child from './Child';

function App() {
  const data = new Date();
  return (
    <div>
      <Child message={data.toLocaleDateString()}/>
    </div>
  );
}

export default App;
