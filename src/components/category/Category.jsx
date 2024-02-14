import React, { useState } from 'react'
import categoryCss from './category.module.css'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import items from '../../json/items.json'
import Swal from "sweetalert2";
import axios from 'axios';
import { Link } from 'react-router-dom';
function Category() {
    const [icon, setIcon] = useState(false)
    const url = "http://localhost:3002/product"


    const sendItems = () => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Գնումների զամբյուղում ավելացվեց ապրանքներ",
            showConfirmButton: false,
            timer: 2000,
        })
    }

    return (
        <div className={categoryCss.main}>
            <div className={categoryCss.leftSide}>
                <div className={categoryCss.filter_div}>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <p onClick={() => {
                            setIcon(!icon)
                        }} style={{ color: 'blue', fontSize: '20px' }}>Բաժիններ</p>
                        <p>{icon ? <KeyboardArrowUpIcon onClick={() => setIcon(false)} style={{ fontSize: '2em', color: 'blue' }} /> :
                            <KeyboardArrowDownIcon onClick={() => setIcon(true)} style={{ fontSize: '2em', color: 'blue' }} />}</p>
                    </div>
                    {icon && <ul>
                        <li><Link to='/badge'>Բեյջեր </Link></li>
                        <li><Link to='/notebook'>Նոթատետրեր </Link></li>
                        <li><Link to='/Business_Card'>Այցեքարտ </Link></li>
                        <li><Link to='/calendar'>Օրացույց </Link></li>
                    </ul>}
                </div>
            </div>
            <div className={categoryCss.rightSide}>
                {items.map((obj) => {
                    return (
                        <div key={obj.id} className="card" style={{ width: '16rem' }}>
                            <img className="card-img-top" src={obj.img} alt="Card image cap" />
                            <div className="card-body">
                                <h6 className="card-title">{obj.name}</h6>
                                <p className="card-text" style={{ fontSize: '20px', fontWeight: 'bold' }}>{obj.price} դրամ</p>
                                <a style={{ width: '100%', height: '40px' }} className="btn btn-primary" onClick={() => {
                                    sendItems();
                                    axios.post(url, {
                                        productName: obj.name,
                                        price: obj.price,
                                        img: obj.img                              
                                    })
                                }}>Ավելացնել զամբյուղում</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Category