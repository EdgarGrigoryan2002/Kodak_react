
import "./shop.css"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import ModalInput from '../modal/ModalInput';
import PriseButtons from "./components/PriseButtons";


function Shop() {
  const url = "http://localhost:3002/product"
  const [product, setProduct] = useState([])
  const [allProductsPrice, setAllProductsPrice] = useState(0)
  const [showModal, setShowModal] = useState(false)
  let getId = product.map(obj => obj.id)
  let getName = product.map(obj => obj.productName)
 
  const deleteAllcategory = () => {
    for (let i = 0; i < getId.length; i++) {
      axios.delete(url + '/' + getId[i]).then(() => setProduct([]))
    }
  }

  useEffect(() => {
    axios.get(url).then((res) => {
      if (res.data.length === 0) {
        return null
      }
      const getAllProdPrice = res.data.map(obj => obj.price).reduce((a, b) => {
        return (a + b)
      }, 0)
      setAllProductsPrice(getAllProdPrice)
      for (let i = 0; i < res.data.length; i++) {
        res.data[i].clickCount = 1

      }
      setProduct(res.data)
    })
    deleteAllcategory()

  }, [])

  const set_product_price = (cost, type = "+", i) => {
    if (type == "+") {
      setAllProductsPrice(allProductsPrice + cost)
      let data = product
      data[i].clickCount += 1
      setProduct(data)
    } else {
      setAllProductsPrice(allProductsPrice - cost)
      let data = product
      data[i].clickCount -= 1
      setProduct(data)
    }
  }


  return (
    <section style={{ backgroundColor: "#eee", minHeight: "62.8vh" }}>
      {showModal && <ModalInput deleteAllcategory={deleteAllcategory} setShowModal={setShowModal}
       allProductsPrice={allProductsPrice} getName={getName} />}
      {product.length === 0 ? <h1 style={{ textAlign: 'center' }}>Ձեր զամբյուղը դատարկ է</h1> :
        <div className="container py-5 h-100" style={{ display: showModal ? 'none' : 'block' }}>
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card">
                <div className="card-body p-4">
                  <div className="row" >
                    <div className="col-lg-7">
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <p className="mb-1">Գնումների զամբյուղ</p>
                          <p className="mb-0">Ձեր զամբյուղում ունեք {product.length} ապրանք</p>
                        </div>
                      </div>
                      {product.map((products, i) => {
                        return (
                          <div className="card mb-3" key={products.id} >
                            <div className="card-body" >
                              <div className="d-flex justify-content-between" style={{ widdisplay: 'flex', flexWrap: 'wrap' }}>
                                <div className="d-flex flex-row align-items-center">
                                  <div>
                                    <img
                                      src={products.img}
                                      className="img-fluid rounded-3" alt="Shopping item" style={{ width: '55px' }} />
                                  </div>
                                  <div className="ms-3">
                                    <h6 style={{ fontSize: '20px', marginLeft: '-15px' }}>{products.productName}</h6>

                                  </div>
                                </div>
                                <PriseButtons set_product_price={set_product_price} cost={products.price} i={i} />
                                <div className="d-flex flex-row align-items-center">

                                  <div style={{ width: "100%", display: 'flex' }}>
                                    <h5 className="mb-0" style={{ marginLeft: '10px' }}>{products.price} դրամ</h5>
                                    <DeleteIcon color="error" onClick={() => {
                                      axios.delete(url + '/' + products.id).then(() => {
                                        let flterProduct = product.filter(el => el.id !== products.id)
                                        setProduct(flterProduct)
                                        setAllProductsPrice(allProductsPrice - product[i].clickCount * products.price)
                                      })
                                      setShowModal(false)
                                    }} style={{ cursor: 'pointer' }} />
                                  </div>
                                  <a href="#!" style={{ color: "#cecece" }}><i className="fas fa-trash-alt"></i></a>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                      <div className="card mb-3">
                        <div className="card-body" >
                          <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                            </div>
                            <div className="d-flex flex-row align-items-center">

                              <div style={{ width: "100%", display: 'flex', gap: '10px', justifyContent: 'center', alignItems: "center" }}>
                                <h5 className="mb-0">Ընդհանուր արժեքը {allProductsPrice} դրամ</h5>
                                <Button onClick={() => {
                                  setShowModal(true)
                                }} variant='contained'>Գնել</Button>
                              </div>
                              <a href="#!" style={{ color: "#cecece" }}><i className="fas fa-trash-alt"></i></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>}

    </section>
  )
}

export default Shop