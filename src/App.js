import './App.css';
import Countries from './components/Countrires/Countries';
function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}
/* 
function LoadCountries() {
  const [countries, setCountrice] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountrice(data));
  }, [])
  return (
    <div>
      <h1>Visiting Every countries of the world!!</h1>
      <h3>Available Countries : {countries.length}</h3>
      {
        countries.map(country => <Countries name={country.name.common} region={country.region}></Countries>)
      }
    </div>

  )
}
function Countries(props) {
  return (
    <div>
      <h2>Name:{props.name}</h2>
      <h2>Region:{props.region}</h2>
    </div>
  )
} */
export default App;
