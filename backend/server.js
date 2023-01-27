import express from 'express'
import mongoose from "mongoose"
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'
import { adminSignIn, postEnquiry, getAllEnquiries, updateEnquiry, postContactUs, deleteEnquiry, getContactUs } from './admin.Controller.js'


const app = express()
dotenv.config()
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true })
let db = mongoose.connection;
db.once("open", () => console.log("Connected to MongoDB"));
db.on("disconnected", () => console.log("Disonnected to MongoDB"));
db.on("reconnected", () => console.log("Reconnected to MongoDB"));
db.on("error", (err) => console.log(err));

app.use(express.json())
app.use(cors())

const __dirname = path.resolve()

app.post('/api/admin/login', adminSignIn)
app.post('/api/enrollData', postEnquiry)
app.post('/api/contact-us', postContactUs)
app.get('/api/contact-us', getContactUs)
app.get('/api/enquiry', getAllEnquiries)
app.post('/api/update-enquiry', updateEnquiry)

app.post('/api/delete-enquiry', deleteEnquiry)


// if(process.env.NODE_ENV==='production'){
//     app.use(express.static(path.join(__dirname,'/admin/build')))

//     app.get('/admin',(req,res)=>{
//         res.sendFile(path.resolve(__dirname,'admin','build','index.html'))
//     })
// }
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/client/build')))
    app.use(express.static(path.join(__dirname, '/admin/build')))

    app.get('/admin', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'admin', 'build', 'index.html'))
    })

    app.get('/*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});
// if(process.env.NODE_ENV==='production'){
//     app.use(express.static(path.join(__dirname,'/client/build')))

//     app.get('*',(req,res)=>{
//         res.sendFile(path.resolve(__dirname,'client','build','index.html'))
//     })
// }

app.listen(process.env.PORT || 5000, () => console.log(`server started in ${process.env.PORT}`))
