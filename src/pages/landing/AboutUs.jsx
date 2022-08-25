import React, { useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Blockchain from '../../assets/images/blockchain.png'
// import AOS from "aos";
// import "aos/dist/aos.css";
import { WOW } from "wowjs";

export default function AboutUs() {

    // useEffect(() => {
    //     AOS.init({
    //         duration: 1000
    //     });
    // },[])
    useEffect(() => {
        const wow = new WOW({ live: false }); 
        wow.init()
        })

    return (
        <>
            <section className='aboutus_section'>
            <div className='bouncing_ball'></div>
            <div className='bouncing_ball1'></div>
            <div className='bouncing_ball2'></div>
             
                <Container>
                    <Row>
                        <Col lg={6} md={12}>
                            {/* <div data-aos="fade-right"> */}
                                <div className='aboutus_image_section  wow slideInLeft' >
                                    <Image className="blockchanin_img" fluid src={Blockchain}></Image>
                                </div>
                            {/* </div> */}

                        </Col>
                        <Col lg={6} md={12} >
                            {/* <div data-aos="fade-left"> */}
                                <div className='aboutus_content_section wow slideInRight'>
                                    <h1>
                                        <span>SLICELEDGER</span> Blockchain
                                    </h1>
                                    <p>
                                        Sliceledger Blockchain is a public, permissionless, Ethereum Virtual Machine (EVM) compatible blockchain running on the world’s leading Proof-of-Stake and Proof-of-play consensus mechanism. The Sliceledger blockchain is open to the public, allowing participants from around the world to join in to secure and verify the record reflect accurate state of affairs.
                                    </p>
                                   
                                </div>
                            {/* </div> */}
                           
                        </Col>
                    </Row>
                </Container>
                
            </section>
        </>
    )
}
