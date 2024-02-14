import React, { useEffect, useState } from 'react'
import styleAdvertisement from './advertisemen.module.css'
import advertisementJson from '../../json/advertisement.json'
import ModalTwo from './ModalTwo'

function Badge() {
    const [getPrice, setGetPrice] = useState(0)
    const [widthInput, setWidthInput] = useState(1)
    const [heightInput, setHeightInput] = useState(1)
    let allPriceInput = getPrice * widthInput * heightInput
    const [nameProduct, setNameProduct] = useState('')
    const [closeSection, setCloseSection] = useState(true)
    const [showModal, setShowModal] = useState(false)
    const styleBtn = {
        width: '300px',
        height: '50px',
        backgroundColor: 'green',
        color: 'white',
        border: 'none',
        borderRadius: '10px',
        opacity: allPriceInput == 0 ? .2 : 1,
        cursor: allPriceInput == 0 ? 'default' : 'pointer'
    }
    useEffect(() => {
        if (widthInput == 0) {
            setWidthInput(1)
        }
    }, [widthInput])

    useEffect(() => {
        if (heightInput == 0) {
            setHeightInput(1)
        }
    }, [heightInput])


    return (
        <div style={{ width: '100%', minHeight: '70vh' }}>
            <div className={styleAdvertisement.main}>
                <p>Գովազդներ, թվային  տպագրություն</p>
            </div>
            {showModal && <ModalTwo allPriceInput={allPriceInput} nameProduct={nameProduct}
            widthInput={widthInput} heightInput={heightInput}
             setShowModal={setShowModal} setCloseSection={setCloseSection} />}
            {closeSection && <div className={styleAdvertisement.section}>
                <div className={styleAdvertisement.leftSide}>
                    <table className="table table-bordered" style={{ marginTop: '20px', height: '260px' }}>
                        <thead>
                            <tr className={styleAdvertisement.tr} style={{ textAlign: 'center' }}>
                                <th scope="col">Նյութ</th>
                                <th scope="col">Չափսեր</th>
                                <th scope="col">Գին</th>
                            </tr>
                        </thead>
                        {advertisementJson.map((obj) => {
                            return (
                                <tbody key={obj.id}>
                                    <tr className={styleAdvertisement.tr} style={{ textAlign: 'center' }}>
                                        <td onClick={() => {
                                            setGetPrice(obj.price)
                                            setNameProduct(obj.name)
                                        }}>{obj.name}</td>
                                        <td>{obj.value} <sup>2</sup> </td>
                                        <td onClick={() => {
                                            setGetPrice(obj.price)
                                            setNameProduct(obj.name)
                                        }}>{obj.price} դրամ</td>
                                    </tr>
                                </tbody>
                            )
                        })}
                    </table>
                </div>
                <div className={styleAdvertisement.rightSide}>
                    <p>Խնդրում ենք մուտքագրել  գովազդի չափսերը</p>
                    <div>
                        <label htmlFor="width">Լայնություն</label>
                        <input type="number" min={1} value={widthInput} id='width' onChange={(e) => {

                            setWidthInput(Number(e.target.value))

                        }} style={{ marginLeft: '25px' }} />
                    </div>
                    <div>
                        <label htmlFor="height">Երկարություն</label>
                        <input type="number" min={1} value={heightInput} onChange={(e) => {
                            setHeightInput(Number(e.target.value))
                        }} id='height' style={{ marginLeft: '10px' }} />
                    </div>
                    <div>
                        <p>Արժեքը {allPriceInput} Դ</p>
                    </div>
                    <div>
                        <input type="submit" value={'Հաստատել Պատվերը'} style={styleBtn} onClick={() => {
                            if (allPriceInput != 0) {
                                setShowModal(true)
                                setCloseSection(false)
                            }
                        }} />
                    </div>
                </div>
            </div>}

        </div>
    )
}

export default Badge