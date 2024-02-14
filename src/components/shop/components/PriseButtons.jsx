import React, { useState } from 'react'
import ".././shop.css"

function PriseButtons({ set_product_price, cost ,i}) {
    const [selectProductCount, setSelectProductCount] = useState(1)
    return (
        <div className='count_buttons_container'>
            <button style={{border: "none", backgroundColor: 'blue', color: 'white', borderRadius: '5px'}} onClick={() => {
                setSelectProductCount(selectProductCount + 1)
                set_product_price(cost,"+",i)
            }}>+</button>
            <div style={{fontWeight: 'bold'}}>{selectProductCount}</div>
            <button style={{border: "none", backgroundColor: 'blue', color: 'white', borderRadius: '5px'}} onClick={() => {
                if (selectProductCount - 1 > 0) {
                    set_product_price(cost, "-",i)
                    setSelectProductCount(selectProductCount - 1)
                }

            }}>-</button>
        </div>
    )
}

export default PriseButtons