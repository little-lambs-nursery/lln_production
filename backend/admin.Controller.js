import { Admin, ContactUs, Enquiry } from "./admin.Model.js";
import jwt from "jsonwebtoken";

export const adminSignIn = async (req, res) => {
    console.log("req.body", req.body);
    try {
        const { email, password } = req.body
        if (!email || !password) return res.status(200).json({ errorcode: 1, status: false, msg: "Email And Password is needed", data: null });
        let user = await Admin.findOne({ name: email, password: password })
        console.log("user", user);
        if (!user) return res.status(200).json({ errorcode: 2, status: false, msg: "Admin Not Found", data: null });
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "300d" });
        user = { ...user._doc, password: null, token };
        //await insertNotifcation({ userid: user._id, title: "Logged In", message: "Login Successfull" });
        return res.status(200).json({ errorcode: 0, status: true, msg: "Logged In successfully.", data: user });
    } catch (e) {
        return res.status(200).json({ errorcode: 5, status: false, msg: e, data: e });
    }
};

export const postEnquiry = async (req, res) => {
    try {
        const { childName, childAge, parentName, parentNumber, email, program, offer } = req.body
        let newEnquiry = new Enquiry({
            childName,
            childAge,
            parentName,
            parentNumber,
            email,
            program,
            offer
        })
        newEnquiry = await newEnquiry.save()
        return res.status(200).json({ errorcode: 0, status: true, msg: "Enquiry Created successfully.", data: newEnquiry });
    } catch (e) {
        console.log(e);
        return res.status(200).json({ errorcode: 5, status: false, msg: e.message, data: e });
    }
};


export const postContactUs = async (req, res) => {
    // console.log("req.body",req.body);
    try {
        const { values: { name, email, number, comment } } = req.body
        console.log("name", name);
        let newEnquiry = new ContactUs({
            name, email, phoneNo: number, comment
        })
        newEnquiry = await newEnquiry.save()
        return res.status(200).json({ errorcode: 0, status: true, msg: "Contacted Form Submitted successfully.", data: newEnquiry });
    } catch (e) {
        console.log(e);
        return res.status(200).json({ errorcode: 5, status: false, msg: e.message, data: e });
    }
};

export const getContactUs = async (req, res) => {
    // console.log("req.body",req.body);
    try {
        let contactUs = await ContactUs.find({}).sort({ createdAt: -1 })
        return res.status(200).json({ errorcode: 0, status: true, msg: "Contacted Form Submitted successfully.", data: contactUs });
    } catch (e) {
        console.log(e);
        return res.status(200).json({ errorcode: 5, status: false, msg: e.message, data: e });
    }
};

export const getAllEnquiries = async (req, res) => {
    try {
        const pageSize = 10
        const page = Number(req.query.page) || 1;

        const data = await Enquiry.find({}).sort({ createdAt: -1 }).limit(pageSize).skip((page - 1) * pageSize)
        return res.status(200).json({ errorcode: 0, status: false, msg: "Enquiry Data Found", data: data })
    } catch (e) {
        return res.status(200).json({ errorcode: 5, status: false, msg: e.message, data: null });
    }
}

export const updateEnquiry = async (req, res) => {
    try {
        const { id, status, message } = req.body;
        let data = await Enquiry.findById(id)
        if (!data) return res.status(200).json({ errorcode: 1, status: false, msg: "Enquiry Not Found", data: null });
        data.childName = data.childName,
            data.childAge = data.childAge,
            data.parentName = data.parentName,
            data.parentNumber = data.parentNumber,
            data.email = data.email,
            data.program = data.program,
            data.offer = data.offer
        data.status = status ? status : data.status
        data.message = message ? message : data.message
        data = data.save()
        return res.status(200).json({ errorcode: 0, status: false, msg: "Enquiry Data Updated Successfully", data: data })
    } catch (e) {
        return res.status(200).json({ errorcode: 5, status: false, msg: e.message, data: null });
    }
}

export const deleteEnquiry = async (req, res) => {
    try {
        let { id } = req.body
        let enquiry = await Enquiry.findById(id)
        if (!enquiry) return res.status(200).json({ errorcode: 1, status: false, msg: "Enquiry Not Found", data: enquiry })
        await Enquiry.deleteOne({ _id: id })
        return res.status(200).json({ errorcode: 0, status: true, msg: "Enquiry Deleted Successfully", data: null })
    } catch (e) {
        return res.status(200).json({ errorcode: 5, status: false, msg: e.message, data: null });
    }
}