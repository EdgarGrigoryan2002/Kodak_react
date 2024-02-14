import React, { useState } from 'react'
import styleBadge from './badge.module.css'
import badgeJson from '../../json/badge.json'
import badgePhoto from '../../image/Beyj.jpg'
import ProductModal from '../productModal/ProductModal'

function Badge() {
    const [showModal, setShowModal] = useState(false)
    const [closeProduct, setCloseProduct] = useState(true)

    
    return (
        <div style={{width: '100%', minHeight: '70vh'}}>
            <div className={styleBadge.main}>
                <p>Բեյջեր, թվային  տպագրություն</p>
            </div>
           {closeProduct &&  <div className={styleBadge.section}>
                <div className={styleBadge.leftSide}>
                    <img src={badgePhoto} alt="" />
                </div>
                <div className={styleBadge.rightSide}>
                    <p>Թրենդային ու յուրատիպ բեյջերն ընդգծում են Ձեր ընկերության ֆիրմային ոճը և ավելի հարմար դարձնում հաճախորդների հետ շփման գործընթացը։ <br /><br />

                        Ստանդարտ բեյջերը հիմնականում օգտագործվում են ցուցահանդեսների, բիզնես հանդիպումների և նմանատիպ այլ իրադարձությունների ժամանակ։ <br /><br />

                        Color Print տպարանում կարող եք պատվիրել փափուկ և կոշտ լամինացիայով պատրաստված բեյջեր՝ գործընկերների և հաճախորդների առջև առավել ներկայանալի տեսք ունենալու համար։</p>
                </div>
            </div>}
           {closeProduct &&  <div className={styleBadge.table_div} style={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
                <table className="table table-bordered" style={{ marginTop: '20px', width: '900px' }}>
                    <thead>
                        <tr className={styleBadge.tr} style={{ textAlign: 'center'}}>
                            <th scope="col">Նյութ</th>
                            <th scope="col">Չափս</th>
                            <th scope="col">Գին</th>
                        </tr>
                    </thead>
                    {badgeJson.map((obj) => {
                        return (
                            <tbody key={obj.id}>
                                <tr className={styleBadge.tr} style={{ textAlign: 'center' }}>
                                    <td>{obj.name}</td>
                                    <td>{obj.size}</td>
                                    <td>1 հատը սկսած {obj.price} դրամ</td>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
                
            </div>}
           {closeProduct &&  <div className={styleBadge.btn_div} style={{display: 'flex', justifyContent: 'flex-end', width: '82%'}}>
                    <button onClick={()=>{
                        setShowModal(true)
                        setCloseProduct(false)
                    }} style={{
                        backgroundColor: 'orange',
                        color: 'white',
                        padding: '10px 20px',
                        borderRadius: '10px',
                        border: 'none'
                        }}>Պատվիրել</button>
                    </div>}

            {showModal && <ProductModal setShowModal={setShowModal} setCloseProduct={setCloseProduct} 
                
            />}

        </div>
    )
}

export default Badge