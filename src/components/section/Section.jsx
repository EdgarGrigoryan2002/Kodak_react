import React from 'react'
import './section.css'
import Category from '../category/Category'
import CallIcon from '@mui/icons-material/Call';
import { Link } from 'react-router-dom';

function Section() {
  return (
    <div>
      <div className='section_div'>
        <p className='p_two'><Link  to='/advertisement' style={{textDecoration:'none', color:'black'}}>Արտաքին գովազդներ</Link></p>
        <p className='p'><span><CallIcon /></span> 094 03 11 29</p>
      </div>
      <div style={{marginTop: '20px'}}>
      <Category />
      </div>
    </div>
  )
}

export default Section