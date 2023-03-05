import { Card, Row, Col } from "react-bootstrap";

const Studies = ({ studiesArray }) => {
    return (
        studiesArray.map(s =>
            <Card key={s.id}>
                <Row>
                    <Col md={3} className={"studies"}>
                        <Card.Title >{s.name}</Card.Title>
                        
                    </Col>
                    <Col md={9}>
                        <Card.Body>
                        <div>{s.school} - {s.place} | {s.period}</div>
                            <div>{s.extra}</div>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        )
    )
}

export default Studies;