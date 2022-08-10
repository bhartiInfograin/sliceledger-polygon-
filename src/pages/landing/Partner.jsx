import React from 'react'
import { Container, Row, Col ,Image} from 'react-bootstrap';
import partner1 from '../../assets/images/partener_four.png';
import partner2 from '../../assets/images/partener_three.png';
import partner3 from '../../assets/images/partener-5.png';
import partner4 from '../../assets/images/partner_one.png';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Partner() {

    
    return (
        <>
            <section className='partner_section'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='partner_img_subsection'>
                                <ul>
                                    <li >
                                        <Image className='image' fluid src={partner1} alt="img" />
                                    </li>
                                    <li >
                                        <Image className='image' fluid src={partner3} alt="img" />
                                    </li>
                                    <li >
                                        <Image className='image' fluid src={partner1} alt="img" />
                                    </li>
                                    <li >
                                        <Image className='image' fluid src={partner3} alt="img" />
                                    </li>
                                </ul>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
