import { TextField } from '@mui/material';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";


function ProductModal({ setShowModal, setCloseProduct }) {


    const form = useRef();
    const [userName, setUserName] = useState('')
    const [userLastName, setUserLastName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')

    const sendEmail = (e) => {
        e.preventDefault();
        if (userName.trim() && userLastName.trim() && email.trim() && number.trim() && !isNaN(number)) {
            emailjs.sendForm('service_tioey74', 'template_x457jxt', form.current, 'aoQjGefbUkTB4uqOp')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Շուտով կապ կհաստատենք ձեզ հետ",
                showConfirmButton: false,
                timer: 4000,
            })
            setShowModal(false)
            setCloseProduct(true)

        } else {
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
                    <Modal.Title>Խնդրում ենք լրացնել դաշտերը</Modal.Title>
                    <Button style={{ display: 'flex', justifyContent: 'center', padding: '20px' }} onClick={() => {
                        setShowModal(false)
                        setCloseProduct(true)
                    }}>x</Button>
                </Modal.Header>

                <Modal.Body>
                    <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <TextField value={userName} onChange={(e) => {
                            setUserName(e.target.value)
                        }} type='text' label="Անուն" variant="outlined" name="from_name" />

                        <TextField value={userLastName} onChange={(e) => {
                            setUserLastName(e.target.value)
                        }} type='text' label="Ազգանուն" variant="outlined" name="from_lastname" />

                        <TextField value={email} onChange={(e) => {
                            setEmail(e.target.value)
                        }} type='email' label="Էլ-հասցե" variant="outlined" name="from_email" />

                        <TextField value={number} onChange={(e) => {
                            setNumber(e.target.value)
                        }} type='tel' label="Հեռախոսահամար" variant="outlined" name="from_phone" />
                        <textarea style={{
                            border: '1px solid #C4C4C4',
                            outline: 'none'
                        }} name="message" placeholder='Նշումներ' cols="30" rows="2"></textarea>

                        <input type="submit" value="Հաստատել" style={css} />
                    </form>
                </Modal.Body>
            </Modal.Dialog>
        </div>
    );
}

export default ProductModal;