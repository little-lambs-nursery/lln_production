import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./EnrollForm.css";
import closeIcon from "../../../img/icons/closeWhite.png";
import React, { useState } from "react";
import Axios from "axios";
import { BASEURL } from "../../../Constents/Constents";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EnrollFormModal = (props) => {
  const [input, setInput] = useState({});
  const [program, setProgram] = useState();
  const [offer, setOffer] = useState();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Axios.post(`${BASEURL}api/enrollData`, {
        childName: input.childName,
        childAge: input.childAge,
        parentName: input.parentName,
        parentNumber: input.parentNumber,
        email: input.email,
        program: program,
        offer: offer
      })
        .then(data => {
          if (data.data.errorcode == 0) {
            toast.success(`${data.data.msg}`, {
              position: "bottom-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            setInput({})
            props.onHide()

          }
          else {
            toast.error(`${data.data.msg}`, {
              position: "bottom-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            setInput({})
          }

        })
    } catch (error) {
      console.log(error.message)
    }



  };

  return (
    <>

      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="enrollFormModal"
      >
        <Modal.Body>
          <img
            src={closeIcon}
            alt="closeIcon"
            className="img-fluid"
            onClick={props.onHide}
          />
          <div className="contactFormTitle">
            <div className="contactFormTitleName">
              <h2>Enroll Your Child</h2>
            </div>
            <div className="contactFormTitleBefore"></div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="formGroup row">
              <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="name"
                    className="form-control"
                    id="childName"
                    name="childName"
                    placeholder="Himanshu Sharma"
                    value={input.childName || ""}
                    onChange={handleChange}
                  />
                  <label for="childName">Child Name</label>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="childAge"
                    name="childAge"
                    placeholder="9"
                    value={input.childAge || ""}
                    onChange={handleChange}
                  />
                  <label for="childAge">Child Age</label>
                </div>
              </div>
            </div>
            <div className="formGroup row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="name"
                    className="form-control"
                    id="parentName"
                    name="parentName"
                    placeholder="Himanshu Sharma"
                    value={input.parentName || ""}
                    onChange={handleChange}
                  />
                  <label for="parentName">Parent Name</label>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="parentNumber"
                    name="parentNumber"
                    placeholder="9555271705"
                    value={input.parentNumber || ""}
                    onChange={handleChange}
                  />
                  <label for="parentNumber">Parent Number</label>
                </div>
              </div>
            </div>
            <div className="formGroup row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="sharmagi1998@gmail.com"
                    value={input.email || ""}
                    onChange={handleChange}
                  />
                  <label for="email">Email Address</label>
                </div>
              </div>
            </div>
            <div className="formGroup row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <select
                    className="form-select"
                    id="program"
                    name="program"
                    value={program}
                    onChange={(e) => {
                      setProgram(e.target.value);
                    }}
                  >
                    <option selected>Select Program</option>
                    <option value="Pre School">Pre School</option>
                    <option value="Nursery">Nursery</option>
                    <option value="Foudation Stages">Foudation Stages</option>
                    <option value="Smart Juniors">Smart Juniors</option>
                  </select>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <select
                    className="form-select"
                    id="offer"
                    name="offer"
                    value={offer}
                    onChange={(e) => {
                      setOffer(e.target.value);
                    }}
                  >
                    <option selected>Select Offer</option>
                    <option value="Easy Start">Easy Start</option>
                    <option value="Start Smart">Start Smart</option>
                    <option value="Growth Plan">Growth Plan</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="formGroup row">
              <div className="col-12">
                <div className="formBtn">
                  {input.childName == undefined ||
                    input.childAge == undefined ||
                    input.parentName == undefined ||
                    input.parentNumber == undefined ||
                    input.email == undefined ||
                    program == undefined ||
                    offer == undefined ? (
                    <button className="w-100 disable">Submit</button>
                  ) : (
                    <button className="w-100">Submit</button>
                  )}
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EnrollFormModal;
