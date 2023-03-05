import { Container } from "react-bootstrap"
import emailjs from "emailjs-com";
import { useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
            <form ref={form} onSubmit={sendEmail}>
                <div className={"row pt-5 mx-auto"}>
                    <div className={"col-8 form-group mx-auto"}>
                        <label className={"text-muted"}>Name</label>
                        <input type={"text"} className={"form-control"} placeholder={"Name"} name={"name"}/>
                    </div>
                    <div className={"col-8 form-group pt-2 mx-auto"}>
                        <label className={"text-muted"}>Email</label>
                        <input type={"email"} className={"form-control"} placeholder={"Email"} name={"email"}/>
                    </div>
                    <div className={"col-8 form-group pt-2 mx-auto"}>
                        <label className={"text-muted"}>Subject</label>
                        <input type={"text"} className={"form-control"} placeholder={"Subject"} name={"subject"}/>
                    </div>
                    <div className={"col-8 form-group pt-2 mx-auto"}>
                        <label className={"text-muted"}>Message</label>
                        <textarea type={"text"} className={"form-control"}  cols={"30"} rows={"8"} placeholder={"Your message"} name={"message"}></textarea>
                    </div>
                    <div className={"col-8 pt-3 mx-auto d-grid"}>
                        <input type={"submit"} className={"btn btn-secondary"} value="Send" onClick={notify} />
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
                            theme="light"/>
        </Container>
    )
}

export default Contact;