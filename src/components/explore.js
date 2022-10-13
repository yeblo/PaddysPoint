import React, { useState } from 'react';
import {
    MDBContainer, MDBRow,MDBCard,MDBCol,MDBCardImage,MDBCardBody,MDBCardTitle} from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';


export default function Explore() {
    //   const [basicActive, setBasicActive] = useState('tab1');

    //   const handleBasicClick = (value) => {
    //     if (value === basicActive) {
    //       return;
    //     }

    //     setBasicActive(value);
    //   };

    return (
        <>
            <MDBContainer className='py-5 text-center explore-section'>
                <div className="py-3 explore ptsans-bold-thunder-20px">
                    EXPLORE
                </div>
                <h1 className="explore-title">
                    THE GOOD STUFF
                </h1>
                <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                    <MDBCol className=''>
                        <MDBCard className='my-3'>
                            <MDBCardImage
                                className='img-fluid d-block'
                                src="/assets/images/guava.png"
                                alt='...'
                                position='top'
                            />
                            {/* <MDBCardBody>
                                <MDBCardTitle className='text-center'> </MDBCardTitle>
                            </MDBCardBody> */}
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard className='my-3'>
                            <MDBCardImage
                                className='img-fluid d-block'
                                src="/assets/images/grapefruit.png"
                                alt='...'
                                position='top'
                            />
                            {/* <MDBCardBody>
                                <MDBCardTitle className='text-center'> </MDBCardTitle>
                            </MDBCardBody> */}
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard className='my-3'>
                            <MDBCardImage
                                className='img-fluid d-block'
                                src="/assets/images/regulator.png"
                                alt='...'
                                position='top'
                            />
                            {/* <MDBCardBody>
                                <MDBCardTitle className='text-center'> </MDBCardTitle>
                            </MDBCardBody> */}
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
                <MDBRow className='row-cols-1 row-cols-md-3'>
                    <MDBCol>
                        <MDBCard className='my-3'>
                            <MDBCardImage
                                className='img-fluid d-block'
                                src="/assets/images/jollof.png"
                                alt='...'
                                position='top'
                            />
                            {/* <MDBCardBody>
                                <MDBCardTitle className='text-center'> </MDBCardTitle>
                            </MDBCardBody> */}
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard className='my-3'>
                            <MDBCardImage
                                className='img-fluid d-block'
                                src="/assets/images/suya.png"
                                alt='...'
                                position='top'
                            />
                            {/* <MDBCardBody>
                                <MDBCardTitle className='text-center'> </MDBCardTitle>
                            </MDBCardBody> */}
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard className='my-3'>
                            <MDBCardImage
                                className='img-fluid d-block'
                                src= "/assets/images/fries.png"
                                alt='...'
                                position='top'
                            />
                            {/* <MDBCardBody>
                                <MDBCardTitle className='text-center'> </MDBCardTitle>
                            </MDBCardBody> */}
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
                <div className='py-5'>
                    <MDBBtn href="/menu" className='explore-btn'>Explore our Menu</MDBBtn>
                </div>
            </MDBContainer>
        </>
    );
}