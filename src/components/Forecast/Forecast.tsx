import React, { useState } from 'react'
import { IDay } from '../../models/interfaces'
interface ForecastProps{
    wdata: IDay[]
}


const Forecast: React.FC<ForecastProps> = ({wdata}) => {
    const [currPage, setCurrPage] = useState(1)
    const [daysPerPage, setDaysPerPage] = useState(3)
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wedsneday', 'Thursday', 'Friday', 'Saturday']
    const pages = []
    const lastIndex = currPage * daysPerPage
    const firstIndex = lastIndex - daysPerPage
    const totalDays = 15
    const currData = wdata.slice(firstIndex, lastIndex)

    for(let i = 1; i <= Math.ceil(totalDays / daysPerPage); i++){
        pages.push(i)
    }

    const paginate = (page: number) => {setCurrPage(page)}
    const nextPage = () => setCurrPage(prev => prev + 1)
    const prevPage = () => setCurrPage(prev => prev - 1)

    const isFirstPage = currPage === 1
    const isLastPage = currPage === pages.length

  return (
      <>
        <div className="d-flex justify-content-center flex-wrap mb-5">
        {wdata && currData.map(day => (
            <div key={day.datetime} className="card text-dark bg-light border-dark mb-2" style={{width: '18rem', marginRight: '1rem', height: '150px'}}>
                <div className="card-body">
                    <div className='d-flex justify-content-between'>
                        <div className='d-flex flex-column align-items-start'>
                            <h5 className="card-title">{days[new Date(day.datetime).getDay()]}</h5>
                            <h6 className="card-title">{day.datetime}</h6>
                        </div>
                        <img src={require(`../../images/2nd Set - Color/${day.icon}.png`)} style={{width:'18%'}}/>
                        <div>
                            <button type="button" className="btn btn-primary position-relative">
                                Temp
                                <span className="position-absolute top-0 start-98 translate-middle badge rounded-pill bg-danger">
                                    {day.temp} F
                                <span className="visually-hidden">unread messages</span>
                                </span>
                            </button>
                        </div>
                    </div>
                    <p className="card-text">{day.description}</p>
                </div>
            </div>
        ))}
    </div>
    <ul className="pagination d-flex justify-content-center">
        <li className="page-item" onClick={isFirstPage ? ()=> false : ()=> prevPage()}>
            <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
            </a>
        </li>
        {pages.map(page => (
            <li key={page} 
                onClick={()=>paginate(page)} 
                className={currPage == page ? 'page-item active' : 'page-item'}
            >
                <a className="page-link" href="#">{page}</a>
            </li>
        ))}
        <li className="page-item" onClick={isLastPage ? ()=> false : ()=> nextPage()}>
            <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
            </a>
        </li>
    </ul>
    <div className='d-flex justify-content-center align-items-center'>
    <span>days on page:</span>
    <select onChange={(e) => setDaysPerPage(parseInt(e.target.value))} className="form-select" id="inputGroupSelect01" style={{maxWidth: "3%", height: "30px"}}>
        <option defaultValue={3}>3</option>
        <option value="6">6</option>
        <option value="9">9</option>
        <option value="15">15</option>
    </select>
    </div>
      </>
  )
}

export default Forecast