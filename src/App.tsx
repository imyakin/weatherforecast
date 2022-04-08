import axios from 'axios';
import React, { ReactEventHandler, useEffect, useState } from 'react';
import './App.css';
import Filter from './components/Filter/Filter';
import Forecast from './components/Forecast/Forecast';
import {IDay } from './models/interfaces';


function App() {
  const [wdata, setwData] = useState([] as IDay[])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    const getData = async () => {
      const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Yerevan,AR?key=EF7TBU9J5UWC9VYETJV7N55UG'
      const {data} = await axios.get(url)
      setwData(data.days)
    }
    getData()
  }, [])

  const filtered = (filter: string) => {
    return filter 
      ? wdata.filter(day => day.datetime === filter)
      : wdata

  }

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value)
  }

  let filteredDays = filtered(filter)

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <h4>Yerevan</h4>
      <Filter filter={filter} onChange={changeHandler}/>
      <Forecast wdata={filteredDays}/>
    </div>
  );
}

export default App;
