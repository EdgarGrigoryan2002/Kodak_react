import {  faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
function Footer() {
    return (
        <footer className="bg-light text-center text-white mt-3" >
            <div className="text-center p-3" style={{ backgroundColor: "black" }}>
                <div className="container  pb-0" style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>  
                    <section className="mb-4" style={{ display: 'flex', alignItems: 'center', height: '50px'}}>
                        <a
                            className="btn text-white btn-floating m-1"
                            style={{
                                backgroundColor: "#3b5998",
                                minWidth: '45px',
                                minHeight: '45px',
                                borderRadius: '40px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                            href="https://www.facebook.com/"
                            role="button"
                        ><FontAwesomeIcon style={{fontSize: '1.7em'}} icon={faFacebookF} /></a>
                        <a
                            className="btn text-white btn-floating m-1"
                            style={{
                                backgroundColor: "#55acee",
                                minWidth: '45px',
                                minHeight: '45px',
                                borderRadius: '40px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                            href="https://www.twitter.com/"
                            role="button"
                        ><FontAwesomeIcon style={{fontSize: '1.7em'}} icon={faTwitter} /></a>
                        
                        <a
                            className="btn text-white btn-floating m-1"
                            style={{
                                backgroundColor: "#ac2bac",
                                minWidth: '45px',
                                minHeight: '45px',
                                borderRadius: '40px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                            href="https://www.instagram.com/"
                            role="button"
                        ><FontAwesomeIcon style={{fontSize: '1.7em'}} icon={faInstagram} /></a>
                        <a
                            className="btn text-white btn-floating m-1"
                            style={{
                                backgroundColor: "#0082ca",
                                minWidth: '45px',
                                minHeight: '45px',
                                borderRadius: '40px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                            href="https://www.linkedin.com/"
                            role="button"
                        ><FontAwesomeIcon style={{fontSize: '1.7em'}} icon={faLinkedin} /></a>
                    </section>
                </div>
                <div>
                        <p> <span> <LocationOnIcon style={{color: 'orange'}} /></span> <span>ք․ Արտաշատ Օգոստոսի 23 115/3</span></p>
                    </div>
                  <div><p>@2023 Կայքը պատրաստվել է <span style={{color: '#5FCF80', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Էդգար Գրիգորյանի</span> կողմից</p></div>
            </div>
        </footer>
    )
}

export default Footer