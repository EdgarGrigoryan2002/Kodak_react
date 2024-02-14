import React, { useState } from 'react'
import styleBusinessCard from './BusinessCard.module.css'
import business_cardJson from '../../json/bussiness_card.json'
import second_business_cardJson from '../../json/second_business_card.json'
import business_cardPhoto from '../../image/Business_card.jpg'
import ProductModal from '../productModal/ProductModal'
function BusinessCard() {

    const [showModal, setShowModal] = useState(false)
    const [closeProduct, setCloseProduct] = useState(true)
  

    return (
        <div style={{ width: '100%', minHeight: '120vh' }}>
            <div className={styleBusinessCard.main}>
                <p>Այցեքարտեր, թվային  տպագրություն</p>
            </div>
          {closeProduct &&   <div className={styleBusinessCard.section}>
                <div className={styleBusinessCard.leftSide}>
                    <img src={business_cardPhoto} alt="" />
                </div>
                <div className={styleBusinessCard.rightSide}>
                    <p>Այցեքարտն առաջին տպավորությունն է Ձեր կամ Ձեր բիզնեսի մասին:

                        Դրա նպատակն է ներկայացնել անհատի կամ կազմակերպության անձնական տվյալները: Այն իր մեջ պետք է պարունակի միայն կարևոր և ճշգրիտ տեղեկատվություն: Այցեքարտը վստահություն և հետաքրքրություն է առաջացնում պատվիրատուի մոտ միայն այն դեպքում, երբ ունենում է  գրավիչ դիզայն: Այդ իսկ պատճառով կարևոր է դիզայնը և տպագրությունը վստահել մասնագիտացված կազմակերպությանը:

                        Control Print-ում կարող եք պատվիրել ցանկացած դիզայնով այցեքարտերի, ինչպես նաև բանկային պլաստիկ քարտերի բարձրորակ թվային տպագրություն՝ մինչև 1000 հատ։</p>
                </div>
            </div>}
            {closeProduct && <div className={styleBusinessCard.table_div} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <table className="table table-bordered" style={{ marginTop: '20px', width: '70%' }}>
                    <thead>
                        <tr className={styleBusinessCard.tr} style={{ textAlign: 'center' }}>
                            <th>Տեսակ</th>
                            <th >Քանակ</th>
                            <th > Գին</th>

                        </tr>
                    </thead>
                    {business_cardJson.map((obj) => {
                        return (
                            <tbody key={obj.id}>
                                <tr style={{ textAlign: 'center' }} className={styleBusinessCard.tr}>
                                    <td>{obj.name} <br />{obj.nameTwo}</td>
                                    <td>{obj.subName}</td>
                                    <td>1հատը՝ {obj.price} Դ</td>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
            </div>}
            {closeProduct && <div className={styleBusinessCard.second_table_div} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <table className="table table-bordered" style={{ marginTop: '20px', width: '70%' }}>
                    <thead>
                        <tr className={styleBusinessCard.tr} style={{ textAlign: 'center' }}>
                            <th>Չափս</th>
                            <th>Տպագրություն</th>
                            <th> Քանակ</th>
                            <th> Գին</th>
                        </tr>
                    </thead>
                    {second_business_cardJson.map((obj) => {
                        return (
                            <tbody key={obj.id}>
                                <tr style={{ textAlign: 'center' }} className={styleBusinessCard.tr}>
                                    <td>{obj.name} <br />{obj.nameTwo}</td>
                                    <td>{obj.subName}</td>
                                    <td>{obj.quality}</td>
                                    <td>{obj.price} Դ</td>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
            </div>}
            {closeProduct &&  <div className={styleBusinessCard.btn_div} style={{display: 'flex', justifyContent: 'flex-end', width: '82%'}}>
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

export default BusinessCard