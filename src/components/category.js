import { MDBContainer, MDBCardGroup, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle } from "mdb-react-ui-kit";
import React from "react";
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import { MDBCardHeader } from "mdb-react-ui-kit";



export default function Category() {
    return (
        <>
            <MDBContainer className="py-5">
                <section className="text-center">
                    <h1 className="category_title text-center py-5">
                        Categories
                    </h1>
                    <MDBCardGroup>
                        <OwlCarousel className="carousel-items" items="4" autoplay nav dots loops>
                           
                            <MDBCard style={{ width: '18rem'}} className="card__img p-5">
                            <MDBCardHeader>
                            <MDBCardImage className="" src="assets/icon/cat_03.png"  alt='...' position='top' />
                            </MDBCardHeader>
                                <MDBCardBody>
                                    <MDBCardTitle>Yogurt</MDBCardTitle>
                                </MDBCardBody>
                            </MDBCard>
                            <MDBCard style={{ width: '18rem' }} className="card__img p-5">
                            <MDBCardHeader>
                            <MDBCardImage className="" src="assets/icon/cat_03.png"  alt='...' position='top' />
                            </MDBCardHeader>
                                <MDBCardBody>
                                    <MDBCardTitle>Fruit Juices</MDBCardTitle>
                                </MDBCardBody>
                            </MDBCard>
                            <MDBCard style={{ width: '18rem' }}>
                            <MDBCardHeader>
                            <MDBCardImage className="" src="assets/icon/cat_03.png"  alt='...' position='top' />
                            </MDBCardHeader>
                                <MDBCardBody>
                                    <MDBCardTitle>Special Juices</MDBCardTitle>
                                </MDBCardBody>
                            </MDBCard>
                            <MDBCard style={{ width: '18rem' }}>
                            <MDBCardHeader>
                            <MDBCardImage className="" src="assets/icon/cat_03.png"  alt='...' position='top' />
                            </MDBCardHeader>
                                <MDBCardBody>
                                    <MDBCardTitle>Hot Shot</MDBCardTitle>
                                </MDBCardBody>
                            </MDBCard>
                            <MDBCard style={{ width: '18rem' }}>
                            <MDBCardHeader>
                            <MDBCardImage className="" src="assets/icon/cat_03.png"  alt='...' position='top' />
                            </MDBCardHeader>
                                <MDBCardBody>
                                    <MDBCardTitle>Snacks and Refreshments</MDBCardTitle>
                                </MDBCardBody>
                            </MDBCard>
                            <MDBCard style={{ width: '18rem' }}>
                            <MDBCardHeader>
                            <MDBCardImage className="" src="assets/icon/cat_03.png"  alt='...' position='top' />
                            </MDBCardHeader>
                                <MDBCardBody>
                                    <MDBCardTitle>Parfait</MDBCardTitle>
                                </MDBCardBody>
                            </MDBCard>

                        </OwlCarousel>
                    </MDBCardGroup>
                </section>
            </MDBContainer>
            
        </>
    );
}
