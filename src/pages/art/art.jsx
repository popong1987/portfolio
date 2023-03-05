import { Col, Container, Row } from "react-bootstrap";
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import photo1 from '../../images/schilderijen/1.jpg'
import photo2 from '../../images/schilderijen/2.jpg'
import photo3 from '../../images/schilderijen/3.jpg'
import photo4 from '../../images/schilderijen/4.jpg'
import photo5 from '../../images/schilderijen/5.jpg'

const Art = () => {

    const [lightboxController, setLightboxController] = useState({
		toggler: false,
		slide: 1
	});

	function openLightboxOnSlide(number) {
		setLightboxController({
			toggler: !lightboxController.toggler,
			slide: number
		});
	}

    return (
        <Container className={"insideContainer"}>
           <h1>Art</h1>
           <>
           <Row>
               <Col className={"pr-2"}>
                    <img src={photo1} className={"painting"} onClick={() => openLightboxOnSlide(1)} />
                    <div className={"text-muted"}>untitled</div>
                    <div>oil on canvas</div>
               </Col>
               <Col className={"px-2"}> 
                    <img src={photo2} className={"painting"} onClick={() => openLightboxOnSlide(2)} />
               </Col>
               <Col className={"pl-3"}>
                    <img src={photo3} className={"painting"} onClick={() => openLightboxOnSlide(3)} />
               </Col>
               
           </Row>
           <Row>
           <Col md={4} className={"pr-2"}>
                    <img src={photo4} className={"painting"} onClick={() => openLightboxOnSlide(4)} />
               </Col>
               <Col md={8}>
               <img src={photo5} className={"painting"} onClick={() => openLightboxOnSlide(5)} />
               </Col>
           </Row>

            
            
			<FsLightbox
				toggler={lightboxController.toggler}
				sources={[
					photo1,
					photo2,
                    photo3,
                    photo4,
                    photo5,
				]}
				slide={lightboxController.slide}
			/>
		</>
        </Container>
    )
}

export default Art;