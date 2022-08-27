import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Header from '../../common/DocHeader';
import HeroSection from '../HeroSection';


const Term_Conditions = () => {
  return (
    <>
         <Header />
         <HeroSection heading="Term and Condition" />
         <Container className='p-5'>
            <Row>
                <Col lg={12}>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, accusamus amet? Odio nam reiciendis eligendi libero deleniti temporibus consequatur fuga sed a hic dolorum in velit, voluptates cum? Quisquam, laborum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quae ea corrupti tenetur molestiae, repudiandae nesciunt ipsum quo recusandae repellendus perspiciatis dicta voluptatum hic sit illum sequi quia! Exercitationem, mollitia!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi inventore architecto, recusandae atque adipisci aspernatur error neque libero qui voluptas molestiae omnis, ea quisquam praesentium? Tenetur enim eos alias temporibus.
                    </div>
                </Col>
            </Row>
         </Container>
      
    </>
  )
}

export default Term_Conditions
