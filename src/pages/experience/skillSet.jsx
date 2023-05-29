import { SiReact, SiJavascript, SiDotnet, SiHtml5, SiCss3, SiCsharp, SiAdobephotoshop, SiAdobeindesign, SiAdobexd, SiAngular } from 'react-icons/si'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SkillSet = () => {
    return (
        <>
        <Row>
            <Col md={"2"}><h1 className='text-primary'><SiDotnet/></h1></Col>
            <Col md={"2"}><h1 className='text-primary'><SiCsharp/></h1></Col>
            <Col md={"2"}><h1 className='text-primary'><SiReact/></h1></Col>
            <Col md={"2"}><h1 className='text-primary'><SiAngular/></h1></Col>
            <Col md={"2"}><h1 className='text-primary'><SiJavascript/></h1></Col>
            <Col md={"2"}><h1 className='text-primary'><SiHtml5/></h1></Col>
        </Row>
        <Row>
            <Col md={"2"}><h1 className='text-primary'><SiCss3/></h1></Col>
            <Col md={"2"}><h1 className='text-primary'><SiAdobephotoshop/></h1></Col>
            <Col md={"2"}><h1 className='text-primary'><SiAdobeindesign/></h1></Col>
            <Col md={"2"}><h1 className='text-primary'><SiAdobexd/></h1></Col> 
            <Col md={"2"}></Col>
            <Col md={"2"}></Col>
        </Row>
           
           
           
           
          
           
           
        </>
    )
}

export default SkillSet;