import axios from 'axios';
import React, { ReactEventHandler, useEffect, useRef, useState } from 'react';
import './App.css';
import Filter from './components/Filter/Filter';
import Forecast from './components/Forecast/Forecast';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import {IDay } from './models/interfaces';


function App() {
  const [wdata, setwData] = useState([] as IDay[])
  const [filter, setFilter] = useState('')
  const [isOpenModel, setIsOpenModal] = useState(false)
  const [city, setCity] = useState('Yerevan,AR')

  const cityRef = useRef('')

  useEffect(() => {
    const getData = async () => {
      const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=EF7TBU9J5UWC9VYETJV7N55UG`
      const {data} = await axios.get(url)
      setwData(data.days)
    }
    getData()
  }, [city])

  const openModal = () => {
    setIsOpenModal(true)
  }

  const closeModal = () => {
    setIsOpenModal(false)
  }

  const filtered = (filter: string) => {
    return filter 
      ? wdata.filter(day => day.datetime === filter)
      : wdata

  }
  const cityHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    cityRef.current = e.target.value
  }
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value)
  }

  const saveChanges = () => {
    setCity(cityRef.current)
    closeModal()
  }

  let filteredDays = filtered(filter)

  return (
    <div className="App mt-3">
      <Header openModal={openModal} city={city}/>
      {isOpenModel && <Modal closeModal={closeModal} cityHandler={cityHandler} saveChanges={saveChanges}/>}
      <Filter filter={filter} onChange={changeHandler}/>
      <Forecast wdata={filteredDays}/>
    </div>
  );
}

export default App;
