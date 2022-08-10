import React from 'react'
import { Container, Row, Col, Image, InputGroup, Form, Button } from 'react-bootstrap'
import Logo from '../assets/images/logo.png';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsLinkedin, BsArrowUpCircleFill } from 'react-icons/bs';
import {AiOutlineArrowUp } from 'react-icons/ai';



export default function Footer() {
    return (
        <>


            <section className='social_icon_sect'>
                <Container>
                    <Row>
                        <Col lg={6} >
                            <div className='content'>
                                Join Our Community
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='footer_social'>
                                <ul>
                                    <li>
                                        <a href='https://www.facebook.com/SliceLedger' target="_blank"><BsFacebook /></a>
                                    </li>
                                    <li>
                                        <a href='https://www.instagram.com/sliceledger/' target="_blank"><BsInstagram /></a>
                                    </li>
                                    <li>
                                        <a href='https://twitter.com/LedgerSlice' target="_blank"><BsTwitter /></a>
                                    </li>
                                    <li>
                                        <a href='https://github.com/SliceLedger' target="_blank"><BsGithub /></a>
                                    </li>
                                    <li>
                                        <a href='https://www.linkedin.com/company/slice-ledger' target="_blank"><BsLinkedin /></a>
                                    </li>

                                </ul>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className='footer_section'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='footer_body'>
                                <h5>Subscribe - Email</h5>
                                <InputGroup className="mb-3 subsribe_email">
                                    <Form.Control
                                        placeholder="Enter your email"

                                    />
                                    <Button variant="outline-secondary" id="button-addon2">
                                        Subscribe
                                    </Button>
                                </InputGroup>
                                <p className='subContent'>We only send interesting and relevant emails.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>


                <Container fluid >
                    <Row>
                        <Col lg={2}> </Col>
                        <Col lg={8} >
                            <div className='footer_bottom'>
                                <p>Copyright @2022</p>|
                                <a href='#'>Sliceledger Terms of use</a>|
                                <a href='#'>Privacy policy</a>

                            </div>
                        </Col>
                        <Col lg={2}>
                            <div className='upIcon'><a href='#'><AiOutlineArrowUp /></a></div>
                        </Col>
                    </Row>
                </Container>


            </section>
        </>
    )
}


{/* <Container>
<Row>
    <Col lg={12}>
        <div className='footer_head'>
            <div className='footer_logo'>
                <Image src={Logo} fluid />
                <div>
                    <h2>SliceLedger</h2>
                </div>
            </div>
            <hr />
        </div>
     </Col>
</Row>
<Row className='d-none'>
    <Col lg={3}>
        <div className='footer_content'>
            <h6>Scaling Solutions</h6>
            <ul>
                <li><a href="/">Sliceledger PoS</a></li>
                <li><a href="/">Sliceledger Edge</a></li>
                <li><a href="/">Sliceledger Hermez</a></li>
                <li><a href="/">Sliceledger Avail</a></li>
                <li><a href="/">Sliceledger Miden</a></li>
                <li><a href="/">Sliceledger Zero</a></li>
                <li><a href="/">Sliceledger Nightfall</a></li>
            </ul>
        </div>
    </Col>
    <Col lg={3}>
        <div className='footer_content'>
            <h6>Developers</h6>
            <ul>
                <li><a href="/">Get Started</a></li>
                <li><a href="/">Github</a></li>
                <li><a href="/">Sliceledger Forum</a></li>
                <li><a href="/">Bug Bounty</a></li>
                <li><a href="/">Sliceledger Lightpaper</a></li>
                <li><a href="/">Sliceledger Whitepaper</a></li>
               
            </ul>
        </div>
    </Col>
    <Col lg={3}>
        <div className='footer_content'>
            <h6>Use Sliceledger</h6>
            <ul>
                <li><a href="/">PoS Wallet</a></li>
                <li><a href="/">PoS Bridge</a></li>
                <li><a href="/">PoS Staking</a></li>
                <li><a href="/">Hermez Wallet</a></li>
                <li><a href="/">Sliceledger Ecosystem</a></li>
                <li><a href="/">SLICE Token</a></li>
              
            </ul>
        </div>
    </Col>
    <Col lg={3}>
        <div className='footer_content'>
            <h6>Initiatives</h6>
            <ul>
                <li><a href="/">Sliceledger Studios</a></li>
                <li><a href="/">Sliceledger Funds</a></li>
                <li><a href="/">Advocate Program</a></li>
                <li><a href="/">Sustainability</a></li>
                <li><a href="/">Cope Studio</a></li>
               
            </ul>
        </div>
    </Col>
    <Col lg={12}>
        <div className='footer_hr'>
            <hr />
        </div>
    </Col>
</Row>
<Row>
    <Col lg={12}>
        <div className='footer_bottom'>
            <p>All right reserved | copyright@2022</p>
            <div className='footer_social'>
                <ul>
                    <li>
                        <a href='#'><BsFacebook /></a>
                    </li>
                    <li>
                        <a href='#'><BsInstagram /></a>
                    </li>
                    <li>
                        <a href='#'><BsTwitter /></a>
                    </li>
                    <li>
                        <a href='#'><BsGithub /></a>
                    </li>
                    <li>
                        <a href='#'><BsTelegram /></a>
                    </li>

                </ul>

            </div>


        </div>
    </Col>
</Row>
</Container> */}