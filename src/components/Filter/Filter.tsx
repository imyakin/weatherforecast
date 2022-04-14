import React from 'react'

interface FilterProps{
  filter: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Filter: React.FC<FilterProps> = ({filter, onChange}) => {
  return (
    <div className='d-flex justify-content-center mb-5'>
        <div className="card text-white bg-secondary p-2">
          <p>Filter by date</p>
          <input
            className='text-center'
            type={'date'} 
            value={filter} 
            onChange={onChange}
            placeholder={'type date here'}
          />
        </div>
      </div>
  )
}

export default Filter