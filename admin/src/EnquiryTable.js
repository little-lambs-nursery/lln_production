import React, { forwardRef, useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, Link, useParams } from 'react-router-dom'
import MaterialTable from 'material-table'
import EditIcon from '@mui/icons-material/Edit';
import { BASEURL } from './Constants'
import EnquiryModal from "./Enquiry.Modal"
import DeleteModal from './Delete.Modal';
import Button from 'react-bootstrap/Button';
import papaparse from "papaparse";
import {
    AddBox,
    ArrowDownward,
    Check,
    ChevronLeft,
    ChevronRight,
    Clear,
    DeleteOutline,
    Edit,
    FilterList,
    FirstPage,
    LastPage,
    Remove,
    SaveAlt,
    Search,
    ViewColumn,
} from '@material-ui/icons'
import { AdminState } from './Context';
// import { BASEURL } from '../../constants'    
// import { CartState } from '../../Context'
// import Loader from '../../Components/Loader'

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
        <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
        <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
}

const Enquiry = () => {
    const navigate = useNavigate();
    const { admin, setAdmin } = AdminState()
    // const { cart, setCart } = CartState();
    // if (!cart || !cart.token) {
    //     navigate('/admin/signin')
    // }
    if (!admin && !admin?.token) {
        navigate('/admin/login')
    }
    const [users, setUsers] = useState([])
    const [modalShow, setModalShow] = React.useState(false);
    const [selected, setSelected] = useState('')
    const [render, setRender] = useState(false)
    const [loading, setLoading] = useState(false)
    const [deleteModalShow, setDeleteModalShow] = React.useState(false);
    const [count, setCount] = useState(1)

    useEffect(() => {

        if (render) setRender(false)
        getData()
    }, [render, count])

    const getData = async () => {
        setLoading(true)
        const data = await axios.get(`${BASEURL}/api/enquiry?page=${count}`)
        setUsers(data.data.data)
        setLoading(false)
    }

    const handleEdit = (e, f) => {
        setSelected(f)
        setModalShow(true)
    }

    const handleDelete = (e, f) => {
        setDeleteModalShow(true)
        setSelected(f)
    }
    const myFunction = async () => {
        try {
            await axios.post(`${BASEURL}/api/delete-enquiry`, { id: selected })
            setRender(true)
            setDeleteModalShow(false)

        } catch (error) {
            console.log(error.message)
        }
    }

    const handlePrev = () => {
        if (count <= 1) {

        }
        else {
            setCount(count - 1)
        }
    }


    const handleNext = () => {
        setCount(count + 1)
    }

    const columns = [
        { title: "Child_Name", field: "childName", },
        { title: "Child_Age", field: "childAge", },
        { title: "Parent_Name", field: "parentName" },
        { title: "Parent_Number", field: "parentNumber" },
        { title: "Email", field: "email" },
        { title: "Program", field: "program" },
        { title: "Offer", field: "offer" },
        { title: "Status", field: "status" },
        { title: "Message", field: "message" }
    ]

    const handleExport = () => {
        const fileData = users.map(userData => {
            return {
                ...userData, tableData: null
            }


        });

        const csv = papaparse.unparse(fileData);
        const link = document.createElement("a");
        link.href = "data:text/csv;charset=utf-8," + encodeURI(csv);
        link.download = "data.csv";
        link.click();
    }



    return (
        <div class="col main pt-5 mt-1" style={{ height: "98vh" }}>
            <>
                <EnquiryModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    selected={selected}
                    setRender={() => setRender(true)}
                />
                <DeleteModal
                    show={deleteModalShow}
                    onHide={() => setDeleteModalShow(false)}
                    selected={selected}
                    myFunction={myFunction}
                    setRender={() => setRender(true)}
                />
                <div lg={6} >
                    <h1 className="m-0 p-0 text-center square ">ENQUIRYS</h1>
                </div>
                {/* <div className="p-5 bg-light rounded-3 ">
                    <div>
                        
                        <div lg={6} >
                            <h1 className="m-0 p-0 text-center square ">ENQUIRY</h1>
                        </div>
                    </div>
                </div> */}
                <div className='pt-5' style={{ zIndex: -1 }}>
                    {/* <Row>
                    <Col>
                        <h2>Enquiry List</h2>
                    </Col>
                </Row> */}
                    {/* {loading ? <Loader /> */}
                    {/* : */}
                    <MaterialTable title={<Button variant="success" onClick={handleExport}>Export</Button>}
                        data={users}
                        columns={columns}
                        icons={tableIcons}
                        options={
                            {
                                actionsColumnIndex: -1,
                                addRowPosition: "first",
                                pageSize: 10,
                                rowStyle: (rowData) => {
                                    return {
                                        // fontFamily: "Mulish-Regular",
                                        fontColor: "white",
                                        backgroundColor: rowData.status === "enquired" ? "#f5d0d0" : rowData.status === "onProcessing" ? "#d0def5" : "#d0f5d7",
                                    }
                                },
                            }
                        }
                        // editable={{
                        //   onRowDelete: (oldData) => new Promise((resolve, reject) => {
                        //     console.log(oldData)
                        //     //Backend call
                        //     axios.delete(`/api/users/${oldData._id}`)
                        //       .then(resp => {
                        //         getData()
                        //         resolve()
                        //       })
                        //   })
                        // }}
                        actions={
                            [
                                {
                                    icon: EditIcon,
                                    tooltip: 'Edit User',
                                    onClick: (event, rowData) => {

                                        // Do save operation
                                        handleEdit(event, rowData)
                                    }
                                },
                                {
                                    icon: DeleteOutline,
                                    tooltip: 'Delete User',
                                    onClick: (event, rowData) => {

                                        // Do save operation
                                        handleDelete(event, rowData._id)
                                    }
                                },
                            ]}
                    />
                    <div className='d-flex justify-content-end mt-3'>
                        <Button variant="dark" style={{ marginRight: '10px' }} onClick={handlePrev}>Prev</Button>
                        <Button variant="dark" onClick={handleNext}>Next</Button>
                    </div>
                </div>
            </>


        </div>
    )
}

export default Enquiry