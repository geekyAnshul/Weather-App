
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SearchBox = ({updateInfo}) => {
  const [city, setCity] = useState("");
  const [error,setError]=useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = import.meta.env.REACT_APP_KEY;

  let getWeatherInfo = async ()=>{
   try{const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    const jsonResponse = await response.json();

    console.log(jsonResponse); // Debugging: Prints the weather data for the entered city
    
    let result = {
      city:city,
      temp : jsonResponse.main.temp,
      tempMin : jsonResponse.main.temp_min,
      tempMax : jsonResponse.main.temp_max,
      humidity : jsonResponse.main.humidity,
      sunrise : new Date(jsonResponse.sys.sunrise * 1000).toLocaleTimeString(),
      sunset : new Date(jsonResponse.sys.sunset * 1000).toLocaleTimeString(),
      feelsLike : jsonResponse.main.feels_like,
      weatherDesc : jsonResponse.weather[0].description,
    }
    console.log(result);
    return result // Debugging: Prints the weather data for the entered city
  }catch(err){
    throw err;
   // Debugging: Prints the error message if any
  }
  }

  const handleSubmit = async(e) => {
    try{e.preventDefault();
    console.log(city); // Debugging: Prints the city name entered
    setCity(""); // Clears the input after submission
    const info =await getWeatherInfo();
     updateInfo(info)
    }catch(err){
      setError(true)
      console.error(err); // Debugging: Prints the error message if any
    }
  };

  return (
    <div className='text-center'>
      <h1 className='heading'>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <TextField 
          sx={{ width: '500px', backgroundColor: '#f5f5f5' }}  // Custom styling using MUI's sx prop
          id="city-name" 
          label="City Name" 
          variant="outlined" 
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required 
        />
        <br /> <br />
        <Button type="submit" variant="contained" className='btn w-[200px]'>
          Search
        </Button>
        {error && <h1 className='error'>No Data found </h1>} 
      </form>
    </div>
   
  );
};

export default SearchBox;


