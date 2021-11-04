import { useState, useEffect } from 'react';
import { Search } from './components/Search';
import { CardList } from './components/CardList'; 
import { getWeather } from './api';

import './App.css';

const getDataFromLocalStorage = () => {
  const weatherData = JSON.parse(localStorage.getItem("array"))
  return weatherData;
}

function App() {

  const [data, setData] = useState([]);
  const [city, setCity] = useState('London');
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const weather = await getWeather(city);
      setData([weather.data, ...data]);
      console.log(weather.data);
      setCity('');
      setLoading(false)
    }
    catch(error) {
      console.log(error.masseage);
      setLoading(false);
    }
  }

  const removeCard = (id) => {
    setData([...data.filter(item => item.id !== id)])
  }

  const updateCard = (card) => {

  }

  useEffect(() => {
    getData();
    // localStorage.setItem('array', JSON.stringify(data));
  }, [])

  return (
     <div className="App">
       <div className="container">
          <h2 className="title"><i className="fa fa-cloud"></i>Weather App</h2>
          <Search 
            city={city} 
            setCity={setCity} 
            getData={getData}
          />
          {
            !loading ? 
              <CardList 
                data={data} 
                removeCard={removeCard} 
                updateCard={updateCard}
              />
            : <h2>Loading...</h2>
          }
       </div>
     </div>
  )
}

export default App;
