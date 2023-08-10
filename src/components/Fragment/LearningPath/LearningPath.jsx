import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import { NavLink } from 'react-router-dom';
import Button from '../../Element/Button';

function LearningPath(props) {
    const { title, time, student, modalTitle, modalDesc, location } = props

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="col">
            <div className="card lerningcard">
                <div className="card-body">
                    <h6>{title}</h6>
                    <p>{time}</p>
                    <div className="mt-4" >
                        <p>{student}</p>
                        <div className="d-flex">
                            <img src="/images/people1.svg" alt="" />
                            <img src="/images/star1.svg" alt="" />
                            <button onClick={handleShow} > <img src="/images/menuCard.svg" alt="" /></button>
                        </div>
                    </div>
                </div>

            </div>

            <Modal
                show={show}
                onHide={handleClose}
                centered  // Menyebabkan modal berada di tengah
            >
                <div className="modalLayout">
                    <Modal.Header closeButton >
                        <Modal.Title>{modalTitle}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >{modalDesc}</Modal.Body>
                    <Modal.Footer>

                        <Button variant=' btn-danger' onClick={handleClose}>
                            Close
                        </Button>

                        <Button onClick={handleClose}>
                            <NavLink className={"text-decoration-none text-white"} to={location}>
                                Lern Now
                            </NavLink>
                        </Button>
                    </Modal.Footer>
                </div>
            </Modal>

        </div>
    )
}

export default LearningPath