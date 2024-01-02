import './App.css';
import Button from './components/Button';

function App() {
  function pici() {if(1===1) {
    return true;
  }
return false;
}

  console.log(pici())

  return (


         <div className="App">
    <Button/>

      </div>
  );
}

export default App;
