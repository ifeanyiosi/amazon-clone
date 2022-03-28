import React from 'react'
import './Header.css'
import { Search, ShoppingBag, ShoppingBasketOutlined } from "@mui/icons-material"
import { Link } from 'react-router-dom'
import { useStateValue } from './Stateprovider';

function Header() {
     const [{basket}, dispatch] = useStateValue();
  return (
    <div className='header'>
        <Link to="/">
            <div className='logo'>
            <h1 className='logo'>BATTLETIDE  </h1></div>
        </Link>
        

        <div className="header-search">
            <input className='search-input'
             type="text" />
             <Search
             className="header-searchIcon"
             />
        </div>

        <div className="header-nav">

            <Link to="/login">
            <div className="header-opt">
                <span className='opt-lineOne'>
                    Hello Guest
                </span>
            </div>
            <div className="header-opt">
                <span className='opt-lineTwo'>
                    Sign In
                </span>
            </div>

            </Link>
            <div className="header-opt">
                <span className='opt-lineOne'>
                    Returns &
                </span>
                <span className='opt-lineTwo'>
                    Orders
                </span>
            </div>

                <Link to ='/checkout'>
                <div className="basketOption">
                    <ShoppingBag />
                    <span className='opt-lineTwo 
                    basketCount' >
                        {basket?.length} </span>
                </div>
                </Link>
                


        </div>

    </div>
  )
}

export default Header