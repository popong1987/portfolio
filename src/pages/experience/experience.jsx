import { Container, Button } from 'react-bootstrap';
import './experience.css';
import WorkArray from './workArray';
import experienceArray from '../../data/expierenceArray';
import Studies from './studies';
import studiesArray from '../../data/studiesArray';
import SkillSet from './skillSet';
import { useState } from 'react';
import Component from './component';
import resume from '../../data/resumeLiesbethDeHaes.pdf';

const components = [
    {title: 'WORK', children: <WorkArray experienceArray={experienceArray}/>},
    {title: 'EDUCATION', children: <Studies studiesArray={studiesArray}/>},
    {title: 'SKILLS', children: <SkillSet/>},
]

const Experience = () => {

    const newComponents = components.length;
    const [openComponents, setOpenComponents] = useState(Array(newComponents).fill(true))

    const toggleIsOpen = (i) => {
        setOpenComponents(o => {
            let newOpenComp = [...o]
            newOpenComp[i] = !o[i]
            return newOpenComp
        })
    }

    return (
        <Container className={"insideContainer"}>
            <h1>EXPERIENCE  <a className='btn btn-outline btnColor' href={resume} download="resumeLiesbethDeHaes.pdf"> Download resume </a> </h1> 

            {components.map((comp, i) => (
                <>
                <Component  key={i} title={comp.title}  toggleIsOpen={() => toggleIsOpen(i)} isOpen={openComponents[i]}>
                    {comp.children}
                </Component>
                <hr className='workTitle'/>
                </>
                
                
            ))}
            
            {/* <h5>WORK</h5>
            <WorkArray experienceArray={experienceArray}/>
            <h5>EDUCATION</h5>
            <Studies studiesArray={studiesArray}/>
            <h5>SKILLSET</h5>
            <SkillSet/> */}

        </Container>
    )
}

export default Experience;