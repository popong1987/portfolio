import { SiReact, SiJavascript, SiDotnet, SiHtml5, SiCss3, SiDynamics365, SiCsharp, SiAdobephotoshop, SiAdobeindesign, SiAdobexd } from 'react-icons/si'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SkillSet = () => {
    return (
        <>
        <Row>
            <Col><h1><SiDotnet/></h1></Col>
            <Col><h1><SiCsharp/></h1></Col>
            <Col><h1><SiDynamics365/></h1></Col>
            <Col><h1><SiReact/></h1></Col>
            <Col><h1><SiJavascript/></h1></Col>
            <Col><h1><SiHtml5/></h1></Col>
            <Col><h1><SiCss3/></h1></Col>    
        </Row>
        <Row>
            <Col> <h1><SiAdobephotoshop/></h1></Col>
            <Col><h1><SiAdobeindesign/></h1></Col>
            <Col><h1><SiAdobexd/></h1></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>    
        </Row>
           
           
           
           
          
           
           
        </>
    )
}

export default SkillSet;