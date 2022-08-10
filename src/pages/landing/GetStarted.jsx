import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import eth_graphic from '../../assets/images/eth_graphic.png'

export default function GetStarted() {
    return (
        <>
            <section className='getStarted_section'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='getStarted_container'>
                                <div className='getStarted_content'>
                                    <h2>Built by developers, for developers</h2>
                                    <p>Sliceledger combines the best of Ethereum and sovereign blockchains into a full-fledged multi-chain system.</p>
                                    <ul>
                                        <li>It is able to fully benefit from Ethereum’s network effects</li>
                                        <li>It is inherently more secure</li>
                                        <li>It is more open and powerful</li>
                                    </ul>
                                    <button className='getStarted_btn'>Get Started</button>
                                </div>
                            </div>
                        </Col>
                        {/* <Col lg={6}>
                            <div className="getStarted_img">
                                <img src="https://res.cloudinary.com/Sliceledgertech/image/upload/f_auto,q_auto,dpr_2/Built_by_developers_for_developers_0946225931" alt="img" className='img-fluid' />
                                 <img src={eth_graphic} alt="img" />
                            </div>
                        </Col> */}
                    </Row>
                </Container>
            </section>
        </>
    )
}
