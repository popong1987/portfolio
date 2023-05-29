import ExperienceCard from './experienceCard';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';


const WorkArray = ({experienceArray}) => {
    return (
        <div>
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#3">
        <Row>
            <Col sm={4}>
                <ListGroup>
                    {experienceArray.map(e =>
                        <ListGroup.Item action href={`#${e.id}`} key={e.id}>
                            <p><b>{e.title}</b></p>
                            <p>{e.place} | {e.period}</p>
                        </ListGroup.Item>
                    )}
                </ListGroup>
            </Col>
            <Col sm={8}>
                <Tab.Content>

                    {experienceArray.map(e =>
                        <Tab.Pane eventKey={`#${e.id}`} key={e.id}>
                            <ExperienceCard {...e} key={e.id} />
                        </Tab.Pane>
                    )}
                </Tab.Content>
            </Col>
        </Row>
    </Tab.Container>
        </div>
        
    )
}

export default WorkArray;