import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import dapp from '../../assets/images/dapps.png'


export default function ScaleDapp() {
    return (
        <>
            <section className='scale_dapp_section'>
                <Container >
                    <Row>
                        <Col lg={6} md={5}>
                            <div className='scale_dapp_container'>
                                <div className='scale_dapp_content'>
                                    <h2>Over 19k+ dApps have used Sliceledger to scale their performance</h2>
                                    <p>Sliceledger is committed to fostering the growth of Web3 applications by providing the infrastructure needed for Web3.</p>
                                    <a href='#' className='dApp_now_btn'>Scale your dApp Now</a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={7}>
                            <div className='scale_dapp_marquee_contanier'>
                                <div className='scale_dapp_img'>
                                    <div className='shade'></div>
                                    <div className='dapp_marquee_text_wrap'>
                                        <div className='dapp_marquee_text_content'>
                                            <div className='dapp_marquee_text_text'>
                                                <img className='dapp_marquee_img' src={dapp}></img>
                                            </div>
                                            <div className='dapp_marquee_text_text'>
                                                <img className='dapp_marquee_img' src={dapp}></img>
                                            </div>
                                            <div className='dapp_marquee_text_text'>
                                                <img className='dapp_marquee_img' src={dapp}></img>
                                            </div>
                                            <div className='dapp_marquee_text_text'>
                                                <img className='dapp_marquee_img' src={dapp}></img>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='explore'>
                                        <div>
                                            <a href='#'>Explore all dapps</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </section>
        </>
    )
}


