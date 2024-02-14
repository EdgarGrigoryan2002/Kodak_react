import React, { useState } from 'react'
import styleCalendar from './calendar.module.css'
import calendarJson from '../../json/calendar.json'
import second_calendarJson from '../../json/secondCalendar.json'
import calendarPhoto from '../../image/calendar.png'
import ProductModal from '../productModal/ProductModal'
function Calendar() {
    const [showModal, setShowModal] = useState(false)
    const [closeProduct, setCloseProduct] = useState(true)

    return (
        <div style={{ width: '100%', minHeight: '120vh' }}>
            <div className={styleCalendar.main}>
                <p>Օրացույցներ, թվային  տպագրություն</p>
            </div>
           {closeProduct &&  <div className={styleCalendar.section}>
                <div className={styleCalendar.leftSide}>
                    <img src={calendarPhoto} alt="" />
                </div>
                <div className={styleCalendar.rightSide}>
                    <p>Օրվա ճիշտ և մանրակրկիտ պլանավորման համար անհրաժեշտ է ունենալ տեսանելի վայրում տեղադրված օրացույց:

                        Օրացույցները կարելի է տպագրել Ձեր նախընտրած նկարներով, գրություններով, ինչպես նաև կազմակերպության լոգոտիպով՝ դարձնելով այն ֆիրմային ոճի կրիչ։ Նման տպագրության շնորհիվ Դուք հնարավորություն ունեք Ձեր գովազդը հասանելի դարձնել մի ամբողջ տարի:

                        Control Print տպարանում թվային տպագրությամբ կարող եք ձեռք բերել օրացույցներ՝ մինչև 500 հատ։</p>
                </div>
            </div>}
            {closeProduct && <div className={styleCalendar.table_div} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <table className="table table-bordered" style={{ marginTop: '20px', width: '70%' }}>
                    <thead>
                        <tr className={styleCalendar.tr} style={{ textAlign: 'center' }}>
                            <th>Տեսակ</th>
                            <th>Չափս</th>
                            <th> Գին</th>

                        </tr>
                    </thead>
                    {calendarJson.map((obj) => {
                        return (
                            <tbody key={obj.id}>
                                <tr style={{ textAlign: 'center' }} className={styleCalendar.tr}>
                                    <td>{obj.name} <br />{obj.nameTwo}</td>
                                    <td>{obj.size}</td>
                                    <td>1հատը՝ {obj.price} Դ</td>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
            </div>}
          {closeProduct &&   <div className={styleCalendar.second_table_div} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <table className="table table-bordered" style={{ marginTop: '20px', width: '70%' }}>
                    <thead>
                        <tr className={styleCalendar.tr} style={{ textAlign: 'center' }}>
                            <th>Տեսակ</th>
                            <th>Չափս</th>
                            <th>Գին</th>
                        </tr>
                    </thead>
                    {second_calendarJson.map((obj) => {
                        return (
                            <tbody key={obj.id}>
                                <tr style={{ textAlign: 'center' }} className={styleCalendar.tr}>
                                    <td>{obj.name} <br />{obj.nameTwo}</td>
                                    <td>{obj.size} </td>
                                    <td>{obj.price} Դ</td>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
            </div>}
            {closeProduct && <div className={styleCalendar.btn_div} style={{ display: 'flex', justifyContent: 'flex-end', width: '82%' }}>
                <button onClick={() => {
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

export default Calendar