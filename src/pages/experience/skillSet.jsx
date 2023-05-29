import { SiReact, SiJavascript, SiDotnet, SiHtml5, SiCss3, SiCsharp, SiAdobephotoshop, SiAdobeindesign, SiAdobexd, SiAngular } from 'react-icons/si'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SkillSet = () => {
    return (
        <>
        <Row>
            <Col md={"2"}><h1><SiDotnet/></h1></Col>
            <Col md={"2"}><h1><SiCsharp/></h1></Col>
            <Col md={"2"}><h1><SiReact/></h1></Col>
            <Col md={"2"}><h1><SiAngular/></h1></Col>
            <Col md={"2"}><h1><SiJavascript/></h1></Col>
            <Col md={"2"}><h1><SiHtml5/></h1></Col>
        </Row>
        <Row>
            <Col md={"2"}><h1><SiCss3/></h1></Col>
            <Col md={"2"}> <h1><SiAdobephotoshop/></h1></Col>
            <Col md={"2"}><h1><SiAdobeindesign/></h1></Col>
            <Col md={"2"}><h1><SiAdobexd/></h1></Col> 
            <Col md={"2"}></Col>
            <Col md={"2"}></Col>
        </Row>
           
           
           
           
          
           
           
        </>
    )
}

export default SkillSet;