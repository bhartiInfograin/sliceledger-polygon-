import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import demo from '../../assets/images/video_2.m4v';
import FeatureSection from './FeatureSection'




export default function HeroSection() {
    return (
        <>
            <section className='hero_section'>
                <div className='hero_section_banner'>
                    <video className='hero_video' autoplay="autoplay" loop="loop" muted="muted">
                        <source src={demo} type="video/m4v" />
                        <source src={demo} type="video/ogg" />
                    </video>
                    <div>
                        <Container>
                            <Row>
                                <Col lg={12} className="p-5">
                                    <div className='hero_content'>
                                        <div className='hero_details'>
                                            <h1>Bringing the world to Ethereum</h1>
                                            <p>Sliceledger believes in Web3 for all. Sliceledger is a decentralised Ethereum scaling platform that enables developers to build scalable user-friendly dApps with low transaction fees without ever sacrificing on security.</p>
                                            <div className='doucumentation'>
                                            <a href='https://slice-ledger.gitbook.io/sliceledger/' target="_blank">Documentation</a>
                                            </div>
                                        
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                <FeatureSection />
            </section>
        </>
    )
}








{/* <Container>
                    <Row>
                        <Col lg={6}>
                            <div className='hero_content'>
                                <div className='hero_details'>
                                    <h1>Bringing the world to Ethereum</h1>
                                    <p>Sliceledger believes in Web3 for all. Sliceledger is a decentralised Ethereum scaling platform that enables developers to build scalable user-friendly dApps with low transaction fees without ever sacrificing on security.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='hero_img_div'>
                                <Image src={Hero} fluid />



                         </div>
                                </Col>
                            </Row>
                        </Container> */}