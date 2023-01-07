import React from 'react'
import { Card } from 'react-bootstrap'
import { motion } from 'framer-motion'
import logo192 from "../images/logo192.png"
import logo512 from "../images/logo512.png"

const Projects = () => {
  const ProjectList = [{
    id:1,
    name:"Marketing product and tendures of the company",
    imageUrl: logo192
  },
  {
    id:2,
    name:"Marketing product and tendures of the company",
    imageUrl: logo512
  },
  {
    id:3,
    name:"Marketing product and tendures of the company",
    imageUrl: logo192
  },
  {
    id:4,
    name:"Marketing product and tendures of the company",
    imageUrl: logo512
  },
  {
    id:5,
    name:"Marketing product and tendures of the company",
    imageUrl: logo192
  },
  {
    id:6,
    name:"Marketing product and tendures of the company",
    imageUrl: logo512
  }]
  return (
    <motion.div className="projects" animate={{
      scale:[2,1],
      rotate:[90,0],
    }} 
    transition={{
      duration:0.5,
      ease:"easeInOut"
    }}>
      <h2>Projects</h2>
      <div className="wrapper">
        {ProjectList.map((item)=>{
        return  <motion.div key={item.id} whileHover={{scale:1.1,transition:{duration:0.5}}}>
                  <Card>
                    <Card.Img varient="top" src={item.imageUrl} />
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                    </Card.Body>
                  </Card>
                </motion.div>
        })}

      </div>
    </motion.div>
  )
}

export default Projects