import React ,{useEffect}from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
// import demo from '../../assets/images/Page-1.png';
import AOS from "aos";
import "aos/dist/aos.css";
import { WOW } from "wowjs";

export default function RightImageSection(props) {

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
        <section className='rightImageSection '>
            <Container>
                <Row >
                    <Col lg={6} md={{ order: 'first' }} xs={{ order: 'first' }}>
                        {/* <div data-aos="fade-right"> */}
                            <div className='rightImageSection_content wow slideInLeft'>
                            <h1><span>{props.headpart1}</span> {props.headpart2}</h1>
                                <p>
                                {/* SliceLedger Web Wallet is Available on the website. SliceLedgerChain equips you with a key vault, secure login, token wallet, and token exchange everything you need to manage your digital assets. SliceLedger provides the simplest yet most secure way to connect to the wallet. SliceLedger Wallet generates passwords and keys on your device, so only you have access to your accounts and data. You always choose what to share and what to keep private. */}
                               {props.content}
                                </p>
                            </div>
                        {/* </div> */}
                    </Col>
                    <Col lg={6} md={{ order: 'last' }} xs={{ order: 'last' }}>
                        {/* <div data-aos="fade-left"> */}
                        <div className='image_holder wow slideInRight'>
                                <Image fluid src={props.sectioimg} alt="img" />
                            </div>
                        {/* </div> */}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
