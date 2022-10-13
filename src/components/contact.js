/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavBar from "./navbar";
import Footer from "./footer";
 import { faTwitter} from '@fortawesome/free-solid-svg-icons'
//  import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
export default function Location() {
    return (
        <>
            <NavBar/>
            <section className="container mb-5">
            <h1 className='py-5 text-center ptsans-bold-sushi-50px'>WHERE YOU CAN FIND US</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.9126555751022!2d-95.64700708455388!3d29.72228924067319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640ddb40810cddd%3A0x8ce609076c488af9!2sPaddy&#39;s%20Point%20Natural%20Fruit%20Juice%20and%20Yogurt%20Bar!5e0!3m2!1sen!2sus!4v1654801369490!5m2!1sen!2sus" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div className="row mt-3">
                    {/* <div className="col-md-4">
                      <h3>Come visit us at</h3>
                      <p><FontAwesomeIcon icon="fa-solid fa-clock" />Mon - Sun :8 am - 11pm</p>
                      <p>3320 S Texas 6 Ste D, <br/>Houston, TX 77082</p>
                      <p>(281) 948-6479</p>
                    </div> */}
                    <div className="col-md-6">
                       <div className="cambay-bold-thunder-35px">We are available on: </div>
                       <img src="assets/images/ubereats.png" alt=""/>&nbsp;&nbsp;
                       <img src="assets/images/grubhub.png" alt=""/>&nbsp;&nbsp;
                       <img src="assets/images/doordash.png" alt=""/>
                       
                    </div>
                    <div className="col-md-6">
                    <p className="cambay-bold-thunder-35px">Follow us on Social Media: </p>
                        <div>
                            <span>
                            {/* <FontAwesomeIcon icon={fasTwitter}/> */}
                            <div>
              <span><a href="https://www.facebook.com/profile.php?id=100075167275763" target="_blank" rel="noreferrer"><img src="assets/logo/facebook.png" alt=""/></a></span>
              <span><a href="https://www.instagram.com/paddyspointhouston/" target="_blank" rel="noreferrer" ><img img src="assets/logo/instagram.png" alt=""/></a></span>
              <span><a href="https://www.tiktok.com/@paddyspoint" target="_blank" rel="noreferrer"><img img src="assets/logo/tiktok.png" alt="" /></a></span>
              </div>
                            </span>
                        </div>
                    </div>

                </div>
               
            </section>
            <Footer/>
        </>
    );

}