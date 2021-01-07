import React, { Component } from 'react';
// import { Image } from 'react-bootstrap';
import './Home.css'; 
import tempImg1 from '../assets/carWallpaper.jpg';

class Home extends Component {
    render() {
        return (
            <div className="container-fluid home-container">
                <div className="row mx-5" style={{backgroundColor : "rgb(32,32,32)"}}>
                    <div className="col-md-6 parallax-col-text title">
                        <h1>Welcome to ess</h1>
                        <br />
                        <b>Your Satisfaction Is Our Priority</b>
                        <br />
                        <br />
                        <p>Since 2000, our talented team works hard everyday to provide the best services for our clients.
                            <br/>
                            We customize our offerings based on specific needs, <br/>
                            so get in touch today to receive an initial quote.
                        </p>
                    </div>
                    {/* This is for parallax image */}
                    <div className="col-md-6 parallax-col-img"> </div>
                </div>

                <div className="row mx-5 overlay-1">
                    <img src={tempImg1} alt={'image1'} style={{width:"100%"}} />
                    <div className="centered">
                        <h1>A Bit About Us</h1>
                        <br />
                        <br />
                        <b>Our Background</b>
                        <br />
                        <br />
                        <p>Since 2000, our talented team works hard everyday to provide the best services for our clients.
                            <br/>
                            We customize our offerings based on specific needs, <br/>
                            so get in touch today to receive an initial quote.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
