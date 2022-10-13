import React from 'react'
import {
  MDBContainer,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faMapPin} from '@fortawesome/free-solid-svg-icons'
function Footer() {
  return (
    <>
    <section className='footer-bg py-5'>
      <MDBContainer className='container p-3'>
        <MDBRow className='row-cols-1 row-cols-md-3'>
          <MDBCol className='mb-3'>
            <img
              className='d-inline-block'
              src='./assets/logo/logo.png'
              height='100'
              alt=''
              loading='lazy'
            />
            <p className='ptsans-normal-thunder-20px mt-3'> Our Socials: </p>
            {/* <div>
              <span>DoorDash</span>
              <span>Grubhub</span>
              <span>UberEats</span>
              </div> */}
              <div>
              <span><a href="https://www.facebook.com/profile.php?id=100075167275763" target="_blank" rel="noreferrer"><img src="assets/logo/facebook.png" alt=""/></a></span>
              <span><a href="https://www.instagram.com/paddyspointhouston/" target="_blank" rel="noreferrer" ><img img src="assets/logo/instagram.png" alt=""/></a></span>
              <span><a href="https://www.tiktok.com/@paddyspoint" target="_blank" rel="noreferrer"><img img src="assets/logo/tiktok.png" alt="" /></a></span>
              </div>
          </MDBCol>
          <MDBCol className='mb-3'>
            <h4 className="cambay-bold-thunder-25px">Quick Links</h4>
            <div className='ptsans-normal-thunder-20px mb-2'><Link to="/menu">Menu</Link></div>
            <div className='ptsans-normal-thunder-20px mb-2'><Link to="/about">About</Link></div>
            <div className='ptsans-normal-thunder-20px mb-2'><a target="_blank" href="https://www.clover.com/online-ordering/paddys-point-houston" rel="noreferrer">Order Now</a></div>
          </MDBCol>
          <MDBCol className='mb-3'>
            <h4 className='cambay-bold-thunder-25px'>Contact</h4>
            <div className='ptsans-normal-thunder-20px mb-2' ><span className='me-2'><FontAwesomeIcon icon={faMapPin}></FontAwesomeIcon> </span> 3320 S Texas 6 Ste D, Houston, Tx 
            <div className='ms-4'>77082, United States</div> 
            </div>
            <div className='ptsans-normal-thunder-20px mb-2'>
              <span className='me-2'><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></span> info@paddyspoint.co
            </div>
            <div className='ptsans-normal-thunder-20px mb-2'>
              <span className='me-2'><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></span> +1 281-741-1037
            </div>
          </MDBCol>
        </MDBRow>
        <hr />
        <div className="text-center">© {new Date().getFullYear()} Paddy's Point. All rights reserved</div>
      </MDBContainer>
      </section>
    </>

  )
}

export default Footer