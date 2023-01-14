import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const DeleteModal = (props) => {
    return (
        <>
            <Modal
                {...props}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >

                <Modal.Body>
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title>Are you sure you <br />want to delete</Card.Title>
                            <Button variant="dark" onClick={props.onHide} style={{ marginRight: '10px' }}>No</Button>
                            <Button variant="danger" onClick={() => props.myFunction()}>Yes</Button>
                        </Card.Body>
                    </Card>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default DeleteModal

