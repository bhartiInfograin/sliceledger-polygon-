import React, { useEffect } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
// import demo from '../../assets/images/Page 2.png';
import AOS from "aos";
import "aos/dist/aos.css";
import { WOW } from "wowjs";
export default function LeftImageSection(props) {

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
        <section className='leftImageSection '>
            <Container>
                <Row>
                    <Col lg={{ span: 6, order: 'first' }}  md={{ order: 'last' }} xs={{ order: 'last' }}>
                    {/* <div data-aos="fade-right "> */}
                        <div className='image_holder wow slideInLeft'>
                            <Image fluid src={props.sectioimg} alt="img" />
                        </div>
                    {/* </div> */}
                    </Col>
                    <Col lg={{ span: 6, order: 'last' }}  md={{ order: 'first' }} xs={{ order: 'first' }}>
                        {/* <div data-aos="fade-left"> */}
                            <div className='leftImageSection_content wow slideInRight'>
                                <h1><span>{props.headpart1}</span> {props.headpart2}</h1>
                                <p>
                                {props.content}
                                </p>
                             
                            </div>
                        {/* </div> */}
               
                    </Col>
                </Row>
            </Container>
          
        </section>

        
    )
}
