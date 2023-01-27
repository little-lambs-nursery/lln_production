import axios from 'axios'
import { useState } from 'react'
import { BASEURL } from '../../Constents/Constents'



const ContactForm = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        number: "",
        comment: ""
    })

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    console.log("values", values);

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post(`${BASEURL}api/contact-us`, { values })
        } catch (error) {

        }
    }

    return (
        <>
            <section className="container-fluid p-0">
                <div className="contactFormBg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="contactFormBox">
                                    <form onSubmit={submitHandler}>
                                        <div className="contactFormTitle">
                                            <div className="contactFormTitleName">
                                                <h2>Get in Touch</h2>
                                            </div>
                                            <div className="contactFormTitleBefore"></div>

                                        </div>
                                        <p>Have some suggestions or just want to say hi? Contact us:</p>
                                        <div className="formGroup row">
                                            <div className="col-12">
                                                <div class="form-floating mb-3">
                                                    <input type="name"
                                                        class="form-control"
                                                        id="floatingInput"
                                                        placeholder="Himanshu Sharma"
                                                        name="name"
                                                        value={values.name}
                                                        onChange={handleChange}
                                                    />
                                                    <label for="floatingInput">Your Name</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="formGroup row">
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                <div class="form-floating mb-3">
                                                    <input
                                                        type="email"
                                                        class="form-control"
                                                        id="floatingInput"
                                                        placeholder="name@example.com"
                                                        name="email"
                                                        value={values.email}
                                                        onChange={handleChange}
                                                    />
                                                    <label for="floatingInput">Email address</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                <div class="form-floating mb-3">
                                                    <input
                                                        type="number"
                                                        class="form-control"
                                                        id="floatingInput"
                                                        placeholder="9555271705"
                                                        name="number"
                                                        value={values.number}
                                                        onChange={handleChange}
                                                    />
                                                    <label for="floatingInput">Phone Number</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="formGroup row">
                                            <div className="col-12">
                                                <div class="form-floating">
                                                    <textarea
                                                        class="form-control"
                                                        placeholder="Leave a comment here"
                                                        id="floatingTextarea"
                                                        name="comment"
                                                        value={values.comment}
                                                        onChange={handleChange}
                                                    >
                                                    </textarea>
                                                    <label for="floatingTextarea">Comments</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="formGroup row">
                                            <div className="col-12">
                                                <div className="formBtn">
                                                    <button>Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="contactMap">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.7431108652836!2d55.2925325150104!3d25.245575983873746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3ec1946262012e6f!2zMjXCsDE0JzQ0LjEiTiA1NcKwMTcnNDEuMCJF!5e0!3m2!1sen!2sin!4v1666863547094!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactForm