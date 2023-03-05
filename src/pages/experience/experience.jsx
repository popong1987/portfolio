import { Container } from 'react-bootstrap';
import './experience.css';
import WorkArray from './workArray';
import experienceArray from '../../data/expierenceArray';
import Studies from './studies';
import studiesArray from '../../data/studiesArray';


const Experience = () => {
    return (
        <Container className={"insideContainer"}>
            <h1>EXPERIENCE</h1>
            <h5>WORK</h5>
            <WorkArray experienceArray={experienceArray}/>
            <h5>EDUCATION</h5>
            <Studies studiesArray={studiesArray}/>

        </Container>
    )
}

export default Experience;