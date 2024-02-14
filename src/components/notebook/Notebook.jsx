import React, { useState } from 'react'
import styleNotebook from './notebook.module.css'
import notebookJson from '../../json/notebook.json'
import notebookPhoto from '../../image/notebook.jpg'
import ProductModal from '../productModal/ProductModal'
function Notebook() {
     const [showModal, setShowModal] = useState(false)
    const [closeProduct, setCloseProduct] = useState(true)

    return (
        <div style={{ width: '100%', minHeight: '120vh' }}>
            <div className={styleNotebook.main}>
                <p>Նոթատետրեր, թվային  տպագրություն</p>
            </div>
           {closeProduct &&  <div className={styleNotebook.section}>
                <div className={styleNotebook.leftSide}>
                    <img src={notebookPhoto} alt="" />
                </div>
                <div className={styleNotebook.rightSide}>
                    <p>Գրավիչ դիզայնով նոթատետրերը Ձեր աշխատանքային մոտիվացիան
                        ապահովելու, ընթացիկ հանձնարարականները համակարգելու և
                        ֆիրմային ոճն ընդգծելու լավագույն միջոցն են: Մեզ մոտ կարող եք
                        պատվիրել թվային տպագրությամբ անվանական կամ Ձեր
                        ընկերության լոգոտիպով նոթատետրեր կաշվից, զսպանակով ու կոշտ կազմով:</p>
                </div>
            </div>}
           {closeProduct &&  <div className={styleNotebook.table_div} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <table className="table table-bordered" style={{ marginTop: '20px', width: '70%' }}>
                    <thead>
                        <tr className={styleNotebook.tr} style={{ textAlign: 'center' }}>
                            <th>Կազմի նյութ</th>
                            <th >Միջուկի նյութ</th>
                            <th > Գին</th>

                        </tr>
                    </thead>
                    {notebookJson.map((obj) => {
                        return (
                            <tbody key={obj.id}>
                                <tr style={{ textAlign: 'center' }} className={styleNotebook.tr}>
                                    <td>{obj.name} <br />{obj.nameTwo}</td>
                                    <td>{obj.subName}</td>
                                    <td>  {obj.price}Դ </td>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
            </div>}
             {closeProduct &&  <div className={styleNotebook.btn_div} style={{display: 'flex', justifyContent: 'flex-end', width: '82%'}}>
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

export default Notebook