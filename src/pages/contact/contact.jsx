import { Col, Container, Row } from "react-bootstrap"
import emailjs from "emailjs-com";
import { useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsFillTelephoneFill,BsLinkedin } from "react-icons/bs";



const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_5txpsxy', form.current, 'kE4s6oIOo0WDMvioe')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    const notify = () => toast.success("Email is verzonden");


    return (
        <Container className={"insideContainer"}>
            <Row>
                <Col md={"5"}>
                    <div className={"row pt-5 mx-auto"}>
                        <h3 className="pb-4 fw-bold workTitle">Hi!</h3>
                        <p>
                            Thank you for visiting my website!
                            I would love to hear from you and learn more about how I can contribute to your projects or answer any questions you may have.
                            Feel free to reach out using the contact form.
                        </p>
                        <p>
                            I'm always open to new opportunities and collaborations, so don't hesitate to get in touch. I'll do my best to respond promptly.
                        </p>
                        <p className="pt-5">
                        Looking forward to connecting with you!
                        </p>
                    </div>

                </Col>
                <Col md={"7"} className={'contact'}>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className={"row pt-5 mx-auto"}>
                            <div className={"col-8 form-group mx-auto"}>
                                {/* <label className={"text-muted"}>Name</label> */}
                                <input type={"text"} className={"form-control"} placeholder={"Name"} name={"name"} />
                            </div>
                            <div className={"col-8 form-group pt-2 mx-auto"}>
                                {/* <label className={"text-muted"}>Email</label> */}
                                <input type={"email"} className={"form-control"} placeholder={"Email"} name={"email"} />
                            </div>
                            <div className={"col-8 form-group pt-2 mx-auto"}>
                                {/* <label className={"text-muted"}>Subject</label> */}
                                <input type={"text"} className={"form-control"} placeholder={"Subject"} name={"subject"} />
                            </div>
                            <div className={"col-8 form-group pt-2 mx-auto"}>
                                {/* <label className={"text-muted"}>Message</label> */}
                                <textarea type={"text"} className={"form-control"} cols={"30"} rows={"8"} placeholder={"Your message"} name={"message"}></textarea>
                            </div>
                            <div className={"col-8 pt-3 pb-5 mx-auto d-grid"}>
                                <input type={"submit"} className={"btn btn-light"} value="Send" onClick={notify} />
                            </div>
                        </div>
                    </form>
                    <ToastContainer position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light" /></Col>
            </Row>

        </Container>
    )
}

export default Contact;