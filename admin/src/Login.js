import Axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { successToast, errorToast, warningToast, BASEURL } from './Constants'
import { AdminState } from './Context'

const Login = () => {
    const navigate = useNavigate()
    const { admin, setAdmin } = AdminState()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    if (admin && admin?.token) {
        navigate('/admin/enquiry')
    }

    const signInHandler = async () => {
        try {
            const { data } = await Axios.post(`${BASEURL}/api/admin/login`, { email, password })
            if (data.errorcode === 0) {
                setAdmin(data.data)
                toast.success(`🦄 ${data.msg}!`, successToast);
                navigate('/admin')
            } else {
                toast.warn(`🦄 ${data.msg}!`, warningToast);
            }
        } catch (error) {
            toast.error(`🦄 ${error.message}!`, errorToast);
        }
    }

    return (
        <div className="container-fluid p-0">
            <div class="loginBg">
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-xl-6">
                            <div class="card rounded-3 text-black">
                                <div class="row justify-content-center align-items-center">
                                    <div class="col-lg-10">
                                        <div class="card-body p-md-5 mx-md-4">

                                            <div class="text-center">
                                                <img src='/logo.81e14bae7abf63931be9.webp'
                                                    style={{ width: "185px" }} alt="logo" />
                                                <h4 class="mt-1 mb-5 pb-1">Welcomr to Little-lambs Admin Portal</h4>
                                            </div>

                                            <form>
                                                <p class="text-center mb-4">Please login to your account</p>

                                                <div class="form-outline mb-2">
                                                    <input type="email" id="form2Example11" class="form-control"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        placeholder="Phone number or email address" />
                                                    <label class="form-label" for="form2Example11">Username</label>
                                                </div>

                                                <div class="form-outline mb-2">
                                                    <input type="password" id="form2Example22" class="form-control"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                    />
                                                    <label class="form-label" for="form2Example22">Password</label>
                                                </div>

                                                <div class="text-center pt-1 mb-5 pb-1">
                                                    <button
                                                        class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                                                        onClick={signInHandler}
                                                        type="button">
                                                        Log in
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login