import React, { useState } from 'react'
import './header.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from '../../image/logo.png'

function Header() {

  const url = "http://localhost:3002/product"
  const [product, setProduct] = useState([])
  axios.get(url).then((res) => setProduct(res.data))

  return (
    <div className='main'>
      <div className="leftSide">
        <Link to='/'>
       <img src={logo} alt="" />
        </Link>
      </div>  
      <div className="shop_div">
            <Link to='/shop'>
          <div className="shop_icon" style={{position: 'relative', zIndex: '10'}}>
            <ShoppingCartIcon style={{color: 'gray', fontSize: '1.6em', }} />
            <div className='shop_length'>{product.length}</div>
          </div>
            </Link>
      </div>
    </div>
  )
}

export default Header