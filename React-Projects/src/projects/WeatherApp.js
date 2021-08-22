import {
    WiCloud,
    WiDayRain,
    WiRain,
    WiNightAltCloudy,
    WiNightAltRain,
    WiMoonset,
    WiCelsius,
    WiDaySunny,
    WiNightRain,
    WiFog
    

} from "weather-icons-react"; // import weather icons

import './css/WeatherApp.css';
import React , { useState, useEffect } from 'react';
import axios from 'axios';
const WeatherApp = () => {
    //day and night weather icons
    const day={
        "Clouds":<WiCloud/>,
        "Rain":<WiRain/>,
        "Clear": <WiDaySunny/>,
        "Drizzle":<WiDayRain/>,
        "Mist":<WiFog/>,
        //Add more
    }
    const night = {
        "Clouds": <WiNightAltCloudy/>,
        "Rain":<WiNightAltRain/>,
        "Clear": <WiMoonset/>,
        "Drizzle":<WiNightRain/>,
        "Mist":<WiFog/>,
        //Add more
    }
    //Get data from OpenWeather API 
    const [items, setItems] = useState([])
    const [isLoading , setIsLoading] = useState(true)   
    useEffect(()=>{
        const fetchItems=async()=>{
            const result = await axios(`https://api.openweathermap.org/data/2.5/weather?q=Europe&appid=8935e08850ccbfb31a043ae754b0ddb0&units=metric`)
            setItems(result.data);
            setIsLoading(false);
        }
        fetchItems();
    },[]);
    const [Location, setLocation] = useState('') 
    const fetchItems = async ()=>{
        try{
            const result = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${Location}&appid=8935e08850ccbfb31a043ae754b0ddb0&units=metric`)
            setItems(result.data);
            setLocation('')
        }catch(err){setLocation('')}
    }
    const d = new Date();
    const hour = d.getHours();
    return isLoading?(""):
        (<div id='weather-body'>   
            <header className='weather-header'>
                <form className='weather-form'>
                    <input type='text'
                    className='weather-input'
                    placeholder='Search...' 
                    onChange={e =>setLocation(e.target.value)}
                    value={Location}
                    onKeyPress={e =>{
                        if (e.key ==='Enter'){
                            e.preventDefault()
                            fetchItems()
                        }}}/>
                </form>
                <h1>{items.name} - <span id='weather-desc'>{items.weather[0].main}</span></h1>
            </header>
            <section className='weather-section'>
                <div className='weather-icons'>{(hour>=6 && hour<=18)?(day[items.weather[0].main]):(night[items.weather[0].main])}</div>
                <div className='weather-all-icons'>
                    <div className="weather-maintemp">
                        {items.main.temp}
                    </div>
                    <div className='weather-temps'>
                        <div className='weather-max-temp'>{items.main.temp_min}<WiCelsius/></div>
                        {'<'}
                        <div className='weather-min-temp'> &nbsp; {items.main.temp_max}<WiCelsius/></div>
                    </div>
                </div>
            </section> 
        </div>)  
}
export default WeatherApp