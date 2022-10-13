import React from 'react'
import {
    MDBContainer,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
import NavBar from './navbar';
import Footer from './footer';
export default function About() {
    return (
        <>
            <NavBar />
            <div className='p-5 text-center bg-image'>
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-white'>
                            <h4 className='mb-3 about-us ptsans-normal-rock-23px'>ABOUT US</h4>
                            <h1 className='mb-3 ptsans-bold-conifer-109px'>LIVING HEALTHY LIFE</h1>
                            {/* <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                Call to action
              </a> */}
                        </div>
                    </div>
                </div>
            </div>
            <MDBContainer className='mt-5 py-5'>
               
               
                <MDBRow className='mb-5 pb-5 row-cols-1 row-cols-md-2'>
                     
                    <MDBCol className=''>
                        <div className='ptsans-normal-black-24px'>
                            <div className='pb-3 about-para'>
                            <h1 className='ptsans-bold-sushi-33px mb-4'>About US</h1>
                            Our produce is organic fruit, vegetable, and skimmed Non-Fat milk extracted by experts with over 38 years of combined experience working with products and educational experts. 
                            Our produce is cleansed and processed without adding additives, such as sugar, coloring, and preservatives.
                            </div>
                            <div className='pb-3 about-para'>
                            We believe in producing healthy food to increase an individual's lifespan. 
                            Our organic fruit juice, special juices, and yogurt make a difference in people's life because all our products are nON-GMO certified.
                            </div>
                            <p><strong>Slogan: </strong>Living Healthy Life</p>
                        </div>
                    </MDBCol>
                    <MDBCol >
                        <img src="/assets/images/about_food.png" className='img-fluid about-food' alt="" />
                    </MDBCol>
                   

                </MDBRow>

                <MDBRow className='row-cols-1 row-cols-md-2'>
                    <MDBCol>
                    <img src="/assets/images/gpp.png" className='img-fluid about-food2' alt="" />
                    </MDBCol>
                    <MDBCol>
                        <h1 className='ptsans-bold-sushi-33px mb-4'>Our Brand</h1>
                        <div className='ptsans-normal-black-24px pb-3 about-para'>
                            <strong>Mission:</strong> Provide healthy products to enhance the health of our esteemed customers.
                            We believe in the adage, "Be the change you want to see in the world."
                            Paddy's Point strives to produce the best organic fruit juice and yogurt possible without adding sugar and additives.
                        </div>
                        <div className='ptsans-normal-black-24px pb-3 about-para'>
                            <strong>Vision:</strong> To become a company known for promoting healthy living while caring for the environment.
                        </div>
                        <div className='ptsans-normal-black-24px pb-3 about-para'>
                            <strong>Value: </strong>As a brand, we want to be recognized as people's first choice to achieve a naturally healthy lifestyle.

                        </div>
                        <div className='ptsans-normal-black-24px pb-3 about-para'>
                            <strong>Customer Experience: </strong>Every customer is important to us, and we strive our best for customer satisfaction.
                            We have an exceptional refund policy at Paddy's Point.
                        </div>
                    </MDBCol>
                </MDBRow>     
            </MDBContainer>
            <Footer/>
        </>
    )
}

