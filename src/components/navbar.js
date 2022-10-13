import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBCollapse
} from 'mdb-react-ui-kit';

export default function NavBar() {
    const [showNavColorThird, setShowNavColorThird] = useState(false);

    return (
        <>
            <MDBNavbar expand='lg' light scrolling sticky="top" style={{ backgroundColor: '#fff' }} >
                {/* style={{ backgroundColor: '#e3f2fd' }} scrolling fixed="top"*/}
                <MDBContainer>
                    <MDBNavbarBrand href='#' className='text-center'>
                        <img
                            className='d-inline-block'
                            src='./assets/logo/logo.png'
                            height='100'
                            alt=''
                            loading='lazy'
                        />
                    </MDBNavbarBrand>

                    <MDBNavbarToggler
                        type='button'
                        data-target='#navbarColor02'
                        aria-controls='navbarColor02'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowNavColorThird(!showNavColorThird)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBCollapse show={showNavColorThird} navbar >
                        <MDBNavbarNav className='mb-2 mb-lg-0 justify-content-center text-center nav-font'>
                            <MDBNavbarItem className='active me-2'>
                                <MDBNavbarLink aria-current='page' href='/' className='nav-link' to="/">HOME</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem  className='me-2'>
                                <MDBNavbarLink href='menu'  className='nav-link'>MENU</MDBNavbarLink>
                            </MDBNavbarItem> 
                            <MDBNavbarItem className='me-2'>
                                <MDBNavbarLink href='/about' className='nav-link' >ABOUT</MDBNavbarLink>
                            </MDBNavbarItem>
                             
                            {/* <MDBNavbarItem className='me-2'>
                                <MDBNavbarLink href='#' className='nav-link'>CONTACT US</MDBNavbarLink>
                            </MDBNavbarItem> */}
                            <MDBNavbarItem className='me-2'>
                                <MDBNavbarLink href='/location' className='nav-link'>LOCATION</MDBNavbarLink>
                            </MDBNavbarItem>

                        </MDBNavbarNav>
                    </MDBCollapse>

                    <MDBCollapse show={showNavColorThird} navbar nav-font>
                        <MDBNavbarNav className='mb-2 mb-lg-0 justify-content-end text-center'>
                            <MDBNavbarItem>
                                <MDBNavbarLink target='_blank' href='https://www.clover.com/online-ordering/paddys-point-houston' color="success" className="order-btn px-2">ORDER NOW</MDBNavbarLink>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </MDBCollapse>

                </MDBContainer>
            </MDBNavbar>
        </>
    );
}