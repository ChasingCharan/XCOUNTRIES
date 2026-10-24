import { useEffect, useState } from 'react'
import Countries from './components/Countries'
import './App.css'

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() =>{
    fetch("https://xcountries-backend.labs.crio.do/all")
      .then(response => response.json())
      .then(data => setCountries(data))
      .catch((error) => {console.error("Error fetching data:", error)});
  }, [])

  return (
    <div className="App">
      <Countries countries={countries} />
    </div>
  )
}

export default App
