import { useEffect } from 'react';
import './App.css';
import Applayout from './components/applayout/Applayout';
function App() {
  useEffect(()=>{
    document.title = "con-ui"
  })
  return (
    <div className="App">
    <Applayout />
    </div>
  );
}

export default App;
