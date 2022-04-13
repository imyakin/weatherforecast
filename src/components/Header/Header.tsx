import React from 'react'


interface HeaderProps{
    city: string;
    openModal: () => void;
}

const Header: React.FC<HeaderProps> = ({openModal, city}) => {
  return (
    <>
        <h1 className='mb-2'>Weather Forecast</h1>
        <div className='d-flex justify-content-center align-items-center mb-4'>
            <h4>{city}</h4>
            <button onClick={openModal}>Change the city</button>
        </div>
    </>
  )
}

export default Header