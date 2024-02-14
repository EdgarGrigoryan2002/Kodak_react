import { TextField } from '@mui/material';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, {useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

function ModalInput({ setShowModal, allProductsPrice, deleteAllcategory, getName}) {

  const form = useRef();
  const [userName, setUserName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
//   const [file, setFile] = useState('')
//   function handleChange(e) {
//     let files = e.target.files
//     let reader = new FileReader()
//     reader.readAsDataURL(files[0])
//     reader.onload = (e) => { setFile(e.target.result) };
  
// }


  const sendEmail = (e) => {
    e.preventDefault();
      if(userName.trim() && !isNaN(phoneNumber) && phoneNumber.trim()){
        emailjs.sendForm('service_01fov6e', 'template_7yz6dc5', form.current, 'aoQjGefbUkTB4uqOp')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    
          setShowModal(false)
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Շուտով կապ կհաստատենք ձեզ հետ",
            showConfirmButton: false,
            timer: 3500,
        })  
        deleteAllcategory()
      }else{
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Խնդրում ենք լրացնել դաշտերը",
          showConfirmButton: false,
          timer: 3000,
      })
      }
  };


  const css = {
    color: 'white',
    backgroundColor: 'blue',
    padding: '7px',
    borderRadius: '8px',
    border: 'none'
  }

  

  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header >
          <Modal.Title>Գնել հիմա</Modal.Title>
          <Button style={{display:'flex', justifyContent: 'center', padding: '20px'}} onClick={()=>{
            setShowModal(false)
          }}>x</Button>
        </Modal.Header>

        <Modal.Body>
          <form ref={form} onSubmit={sendEmail}  style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <TextField value={userName} onChange={(e)=>{
          setUserName(e.target.value)
          
        }} type='text' label="Անուն" variant="outlined" name="from_name"  />
        <TextField value={phoneNumber} onChange={(e) => {
          setPhoneNumber(e.target.value)
        }} type='tel' label="Հեռախոսահամար" variant="outlined" name="from_number" /> 
        <input type="hidden" name="from_price" value={`${getName} ${allProductsPrice} դրամ`} onChange={()=>{}}  />
        <input type="submit" value="Գնել" style={css} />
          </form>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
}

export default ModalInput;