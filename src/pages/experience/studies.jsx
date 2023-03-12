import { Card, Row, Col } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';

const Studies = ({ studiesArray }) => {
    return (
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#0">
            <Row>
                <Col sm={4}>
                    <ListGroup>
                        {studiesArray.map(e =>
                            <ListGroup.Item action href={`#${e.id}`} key={e.id}>
                                <p><b>{e.name}</b></p>
                            </ListGroup.Item>
                        )}
                    </ListGroup>
                </Col>
                <Col sm={8}>
                    <Tab.Content>

                        {studiesArray.map(s =>
                            <Tab.Pane eventKey={`#${s.id}`} key={s.id}>
                                <Card.Body>
                                    <div>{s.school} - {s.place} | {s.period}</div>
                                    <div>{s.extra}</div>
                                </Card.Body>
                            </Tab.Pane>
                        )}
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    )
}

export default Studies;