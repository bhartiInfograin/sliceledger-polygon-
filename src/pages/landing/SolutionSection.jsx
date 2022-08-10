import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Sliceledger_Po_S from "../../assets/images/Polygon_Po_S.png";
import Sliceledger_Hermez from "../../assets/images/Polygon_Hermez.png";
import Sliceledger_Avail from "../../assets/images/Polygon_Avail.png";
import Sliceledger_Edge from "../../assets/images/Polygon_Edge.png";
import Sliceledger_Nightfall from "../../assets/images/Polygon_Nightfall.png";
import Sliceledger_Miden from "../../assets/images/Polygon_Miden.png";
import Sliceledger_Zero from "../../assets/images/Polygon_Zero.png";

export default function SolutionSection() {
    return (
        <>
            <section className='solution_section'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='solution_head'>
                                <h2>Scaling solutions</h2>
                                <p>Sliceledger's complete suite of Ethereum-scaling solutions</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='my-4' lg={3} md={6} sm={12}>
                            <div className='solution_boxes'>
                                <div className='solution_box_item'>
                                    <img src={Sliceledger_Po_S} alt="Sliceledger PoS.png"></img>
                                    <h6>Sliceledger PoS</h6>
                                    <p>EVM-compatible Ethereum sidechain, secured by a permissionless set of PoS validators.
                                    </p>
                                </div>
                                <div className='solution_box_item_status'>Live</div>
                            </div>
                        </Col>
                        <Col className='my-4' lg={3} md={6} sm={12}>
                            <div className='solution_boxes'>
                                <div className='solution_box_item'>
                                    <img src={Sliceledger_Hermez} alt="Sliceledger_Hermez.png"></img>
                                    <h6>Sliceledger Hermez</h6>
                                    <p>   An open-source zk-rollup optimised for secure, low-cost and usable token transfers on the wings of Ethereum.</p>
                                </div>
                                <div className='solution_box_item_status'>Live</div>
                            </div>
                        </Col>
                        <Col className='my-4' lg={3} md={6} sm={12}>
                            <div className='solution_boxes'>
                                <div className='solution_box_item'>
                                    <img src={Sliceledger_Avail} alt="Sliceledger_Avail.png"></img>
                                    <h6>Sliceledger Avail</h6>
                                    <p>  A general-purpose, scalable data availability-focused blockchain targeted for standalone chains and off-chain scaling solutions.</p>
                                </div>
                                <div className='solution_box_item_status'>Live</div>
                            </div>
                        </Col>
                        <Col className='my-4' lg={3} md={6} sm={12}>
                            <div className='solution_boxes'>
                                <div className='solution_box_item'>
                                    <img src={Sliceledger_Edge} alt="Sliceledger_Edge.png"></img>
                                    <h6>Sliceledger Edge</h6>
                                    <p> A modular and extensible framework for building private or public Ethereum-compatible blockchain networks.</p>
                                    
                                </div>
                                <div className='solution_box_item_status'>Live</div>
                            </div>
                        </Col>
                        <Col className='my-4' lg={3} md={6} sm={12}>
                            <div className='solution_boxes'>
                                <div className='solution_box_item'>
                                    <img src={Sliceledger_Nightfall} alt="Sliceledger_Nightfall.png"></img>
                                    <h6>Sliceledger Nightfall</h6>
                                    <p>   A one-of-a-kind scaling solution that uses optimistic roll-ups along with Zero-Knowledge cryptography (zk-rollup).</p>
                                   
                                </div>
                                <div className='solution_box_item_status'>Live</div>
                            </div>
                        </Col>
                        <Col className='my-4' lg={3} md={6} sm={12}>
                            <div className='solution_boxes'>
                                <div className='solution_box_item'>
                                    <img src={Sliceledger_Miden} alt="Sliceledger_Miden.png"></img>
                                    <h6>Sliceledger Miden</h6>
                                    <p>  A STARK based zk-rollup with support for arbitrary smart contracts. </p>
                                    
                                </div>
                                <div className='solution_box_item_status'>Live</div>
                            </div>
                        </Col>
                        <Col className='my-4' lg={3} md={6} sm={12}>
                            <div className='solution_boxes'>
                                <div className='solution_box_item'>
                                    <img src={Sliceledger_Zero} alt="Sliceledger_Zero.png"></img>
                                    <h6>Sliceledger Zero</h6>
                                    <p>A highly-scalable, Ethereum-compatible zk-rollup. It uses an incredibly fast recursive proof system that is Eth-friendly. </p>
                                  
                                </div>
                                <div className='solution_box_item_status'>Live</div>
                            </div>
                        </Col>
                        <Col className='my-4' lg={3} md={6} sm={12}>
                            <div className='solution_boxes'>
                                <div className='solution_box_coming_soon'>
                                    <h6>Enterprise chain</h6>
                                    <p>Coming soon</p>
                                  
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
