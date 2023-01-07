import React from 'react'
import { motion } from 'framer-motion';
import { Row, Col, Form, FormControl, FormGroup, FormLabel, Button, ListGroup, ListGroupItem } from 'react-bootstrap'

const Contact = () => {
  const handleSubmit = (event) => { };
  return (
    <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} exit={{ scaleY: 0 }} transition={{ duration: 0.2 }} className='contact' >
      <div >
        <h2>Contact</h2>
        <Row>
          <Col>
            <div className='contact-form'>
              <Form onSubmit={handleSubmit}>
                <FormGroup className='mb-3' controlId="validationCustom01">
                  <FormLabel>Name</FormLabel>
                  <FormControl required type="text" placeholder='Name' />
                </FormGroup>
                <FormGroup className='mb-3' controlId="validationCustom01">
                  <FormLabel>Email</FormLabel>
                  <FormControl required type="email" placeholder='Email' />
                </FormGroup>
                <FormGroup className='mb-3' controlId="validationCustom01">
                  <FormLabel>Message</FormLabel>
                  <FormControl required as="textarea" placeholder='Message' />
                </FormGroup>
                <Button type='submit'>Submit Form</Button>
              </Form>
            </div>
          </Col>
          <Col>
            <div className='contact-data'>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto labore ab illo, quibusdam veritatis inventore reiciendis culpa eaque sed tempore sunt perspiciatis eos? Sed consectetur, quae tempore esse beatae laborum consequuntur aliquid maiores exercitationem!</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto aspernatur fugiat magnam!</p>
              <p>
                <ListGroup horizontal>
                  <ListGroupItem><a href="https://youtu.be/oBG6OK9VTaU">Instagram</a></ListGroupItem>
                  <ListGroupItem><a href="https://youtu.be/oBG6OK9VTaU">LinkedIn</a></ListGroupItem>
                  <ListGroupItem><a href="https://youtu.be/oBG6OK9VTaU">Twitter</a></ListGroupItem>
                  <ListGroupItem><a href="https://goo.gl/maps/6xQqGZBoVc71f4NK6">Location</a></ListGroupItem>
                </ListGroup>
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </motion.div>
  )
}

export default Contact