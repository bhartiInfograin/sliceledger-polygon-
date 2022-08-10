import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Join_the_com from '../../assets/images/Join_the_com.png'
import updates_from_Polygon from '../../assets/images/updates_from_Polygon.png'
import future_of_blockchain from '../../assets/images/future_of_blockchain.png'
import { FiArrowUpRight } from 'react-icons/fi'

export default function ScaleEthereum() {
    return (
        <>
            <section className='scaleEthereum_section'>
                <Container>
                    <Row>
                        <Col lg={12} md={12}>
                            <div className='scaleEthereum_section_main'>
                                <h1>Let's Scale Ethereum together.</h1>
                                <div className="scaleEthereum_section_main_contanier">
                                    <div className='scaleEtherun_card'>
                                        <img src={Join_the_com} alt='dd'></img>
                                        <div className='scaleEtherun_card_content'>
                                            <h5>Developer Resources</h5>
                                            <p>Getting started with Sliceledger solutions with guide, documentation, tutorials, SDKs and more.</p>
                                        </div>

                                    </div>
                                    <div className='scaleEtherun_card'>
                                        <img src={Join_the_com} alt='dd'></img>
                                        <div className='scaleEtherun_card_content'>
                                            <h5>Join the Community</h5>
                                            <p>Become part of twitter or Telegram? We’ve many channels to onboard you. </p>
                                        </div>
                                    </div>
                                    <div className='scaleEtherun_card'>
                                        <img src={Join_the_com} alt='dd'></img>
                                        <div className='scaleEtherun_card_content'>
                                            <h5>Join the Ecosystem</h5>
                                            <p>Want to BUIDL a dApp on Sliceledger or already have one and want to launch on Sliceledger?</p>
                                        </div>
                                    </div>
                                    <div className='scaleEtherun_card'>
                                        <img src={Join_the_com} alt='dd'></img>
                                        <div className='scaleEtherun_card_content'>
                                            <h5>Secure the Network</h5>
                                            <p>Become a validator or Delegator for Sliceledger Pos Chain and secure the network</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='community_section'>
                <Container>
                    <Row>
                        <Col lg={6} md={12} >
                            <div className='web3_container'>
                                <img src={future_of_blockchain} alt="future_of_blockchain"></img>
                                <h5>  Help us build future of Web3</h5>
                                <p>Learn more about us or see current openings to join us!</p>
                                <a href='#'>see Open Role<FiArrowUpRight /></a>
                            </div>
                        </Col>
                        <Col lg={6} md={12}>
                            <div className='web3_container'>
                                <img fluid src={updates_from_Polygon} alt="updates_from_Polygon"></img>
                                <h5>Be a part of our Community  </h5>
                                <p> Keep tabs on all-things-SliceLeger.</p>
                                <a href='#'>Explore<FiArrowUpRight /></a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
