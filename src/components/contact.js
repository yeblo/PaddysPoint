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
            <div className="row ">
            <div className="col-md-6 col-lg-4 grey-container">
                <h3 className="cambay-bold-thunder-35px">Contact</h3>
                <p>(281) 948-6479</p>
                <p>3320 S Texas 6 Ste D, <br/>Houston, TX 77082</p>

                <p>
                <a href ="https://maps.app.goo.gl/96VLmkCozncAKyrs8" target="_blank">get directions</a>
                </p>
                
                <h3 className="cambay-bold-thunder-35px">Hours</h3>

                <div className="row">
                <div>Monday <span>9:00 AM – 11 PM</span></div>
                <div>Tuesday <span>9:00AM – 11 PM</span></div>
                <div>Wednesday <span>9:00 AM – 11 PM</span></div>
                <div>Thursday <span>9:00AM – 11 PM</span></div>
                <div>Friday <span>9:00 AM – 11 PM</span></div>
                <div>Saturday <span>9:00 AM – 11 PM</span></div>
                <div>Sunday <span>9:00 AM – 11 PM</span></div>
                </div>
            </div>
            <div className="col-md-6 col-lg-8 pt-3">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.9126555751022!2d-95.64700708455388!3d29.72228924067319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640ddb40810cddd%3A0x8ce609076c488af9!2sPaddy&#39;s%20Point%20Natural%20Fruit%20Juice%20and%20Yogurt%20Bar!5e0!3m2!1sen!2sus!4v1654801369490!5m2!1sen!2sus" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            </div>
            </section>
            <section>
                
            </section>
            <Footer/>
        </>
    );

}