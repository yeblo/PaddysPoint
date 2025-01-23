import React from 'react'
import NavBar from './navbar';
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import Explore from './explore';
import Footer from './footer';
export default function Home() {
    return (
        <>
            <header className="bg-light bg-gradient ">
                <NavBar />
                <section className="hero__area hero__bg bg-slider">
                    <div className="p-5 hero__height d-flex align-items-center">
                        {/* <div className="container"> */}
                        <MDBContainer>
                            <div className="row align-items-center flex-row-reverse mt-none-30 ">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="slider__content">
                                        <h1 className="slide__title">Healthy. Fresh. <br /> Delicious.</h1>
                                        <h1 className="slide__sub__title"> (No Sugar Added) </h1>
                                        <p>Fuel your body with nature's best—pure, organic, and full of vitality. Sip health, taste happiness! <br /></p>
                                    </div>
                                    <MDBBtn href='/menu' className='hero-btn mt-3 me-3 discover-now'>Discover now</MDBBtn>
                                    <MDBBtn href='/about' className="hero-btn mt-3 about-us">About us</MDBBtn>


                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="slider__img">
                                        <img src="assets/images/slider_left_pic.png" className='img-fluid' alt="" />
                                    </div>
                                </div>

                            </div>
                        </MDBContainer>

                    </div>
                </section>
                <Explore />
            </header>
            <Footer />
        </>
    )
}
