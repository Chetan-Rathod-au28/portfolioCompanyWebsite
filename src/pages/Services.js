import React from 'react'
import { Card } from 'react-bootstrap'
import { motion } from 'framer-motion'
import logo192 from "../images/logo192.png"
import logo512 from "../images/logo512.png"

const Services = () => {
    const serviceList = [{
        id:1,
        name:"Consulting",
        imageUrl: logo192
      },
      {
        id:2,
        name:"Web App Development",
        imageUrl: logo512
      },
      {
        id:3,
        name:"Tendures",
        imageUrl: logo192
      },
      {
        id:4,
        name:"Courses",
        imageUrl: logo512
      }]
  return (
    <motion.div initial={{scaleY:0}} animate={{scaleY: 1}} exit={{scaleY: 0}} transition={{duration:0.2}}>
    <div className="services">
        <h2>Services</h2>
        <div className="wrapper">
            {serviceList.map((item)=>{
                return <motion.div key={item.id} whileHover={{scale:1.1,transition:{duration:0.5}}}>
                        <Card>
                            <Card.Img varient="top" src={item.imageUrl} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                            </Card.Body>                            
                        </Card>
                         </motion.div>
            })}

        </div>
        </div>
        </motion.div>
  )
}

export default Services