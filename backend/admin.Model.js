
import mongoose from 'mongoose';

const schema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        }
    }
)

export const Admin=new mongoose.model('Admin',schema)

const enquirySchema=new mongoose.Schema(
    {
        childName:{
            type:String,
            required:true
        },
        childAge:{
            type:String,
            required:true
        },
        parentName:{
            type:String,
            required:true
        },
        parentNumber:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        program:{
            type:String,
            required:true
        },
        offer:{
            type:String,
            required:true
        },
        status: {
            type: String,
            required: true,
            enum: ["enquired", "onProcessing","completed"],
            default: "enquired"
        },
        message:{
            type:String,
            default:""
        },
    }
)

export const Enquiry=new mongoose.model('Enquiry',enquirySchema)

const contactSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        phoneNo:{
            type:String,
            required:true
        },
        comment:{
            type:String,
            required:true
        }
    }
 )
  
 export const ContactUs=new mongoose.model('ContactUs',contactSchema)
 