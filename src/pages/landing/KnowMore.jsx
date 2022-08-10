import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function KnowMore() {
    return (
        <>
            <section className='knowMore_section'>
                <Container>
                    <Row>
                        <Col lg={12} md={12}>
                            <div className='knowMore_main'>
                                <Row>
                                    <Col lg={8} md={6}>
                                        <div className='knowMore_main_content'>
                                            <h3> A Smart Contract with Planet Earth</h3>
                                            <p> Going carbon-negative in 2022, and climate positive beyond that. #SliceledgerGoesGreen</p>
                                            <button>Know More</button>
                                        </div>
                                    </Col>
                                </Row>

                            </div>
                        </Col>
                    </Row>
                </Container>



            </section>
        </>
    )
}
