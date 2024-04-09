import React from 'react'
import Filter from './Filter'

const Header = () => {
  return (
    <>
    <header>
        <h3>Sajilo Sewa</h3>
        <input type="text" id="search" name="search" placeholder='Search Your Item' />
        <input type="button" value="Login" id="login" />
    </header>
    <div className="allDataToBeFilter">
        <Filter data="Mobile"/>
        <Filter data="TV" />
        <Filter data="Accessories" />
        <Filter data="Gadgets" />
        <Filter data="Electronic" />
        <Filter data="Food" />
    </div>
    </>
  )
}

export default Header