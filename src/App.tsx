import './App.css'
import Button from './components/Button'

function App() {
  function pica() {
    if (1 === 1) {
      return true
    }
    return false
  }

  console.log(pica())

  return (
    <div className="App">
      <Button />
    </div>
  )
}

export default App
