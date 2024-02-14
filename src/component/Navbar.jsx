import React from 'react'
import { Outlet,Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
        <div className='nav1'>
            <div className='nav'>
               <p className='crispy'>Crispy Kitchen</p>
        
                <div className='num1'>
                 <Link to='/'>   <p className='home'>Home</p></Link>
                 <Link to='Story'>   <p className='home'>Story</p></Link>
                <Link to='Manu'>  <p className='home'>Menu</p></Link>
                    <p className='home'>Our Updates</p>
                    <p className='home'>Contacts</p>
                </div>
                <button className='reservation-button'>Reservation</button>
            </div>
         
        </div>
            <Outlet/>
        </>
     );
}

export default Navbar;