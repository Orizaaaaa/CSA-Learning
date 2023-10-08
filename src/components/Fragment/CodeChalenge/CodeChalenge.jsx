import React, { useState } from 'react'
import { Codechalenge } from '../../../image'
import Accordion from 'react-bootstrap/Accordion';
import Modal from 'react-bootstrap/Modal';


function CodeChalenge() {
    const [lgShow, setLgShow] = useState(false);
    return (
        <>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg modal-dialog modal-dialog-centered"
            >
                <div className="modalLayout">
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            Code Chalenge
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body  >
                        <Accordion  >
                            <Accordion.Item eventKey="0"  >
                                <Accordion.Header > <h6>AMATIR</h6> </Accordion.Header>
                                <Accordion.Body className='modalChalenge' >
                                    <ul class="list-group">
                                        <a href='https://react-bootstrap.netlify.app/docs/components/list-group/' target='_blank'>
                                            <li class="list-group-item ">Algoritma Pemrograman</li>
                                        </a>
                                        <a href='https://react-bootstrap.netlify.app/docs/components/list-group/' target='_blank'>
                                            <li class="list-group-item ">Stuktur Data</li>
                                        </a>
                                        <a href='https://react-bootstrap.netlify.app/docs/components/list-group/' target='_blank'>
                                            <li class="list-group-item ">HTML</li>
                                        </a>
                                        <a href='https://react-bootstrap.netlify.app/docs/components/list-group/' target='_blank'>
                                            <li class="list-group-item ">CSS</li>
                                        </a>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header> <h6>BEGINER</h6> </Accordion.Header>
                                <Accordion.Body className='modalChalenge'>
                                    <ul class="list-group">
                                        <a href='https://react-bootstrap.netlify.app/docs/components/list-group/' target='_blank'>
                                            <li class="list-group-item ">Bootsrap</li>
                                        </a>
                                        <a href='https://react-bootstrap.netlify.app/docs/components/list-group/' target='_blank'>
                                            <li class="list-group-item ">Javascript</li>
                                        </a>
                                        <a href='https://react-bootstrap.netlify.app/docs/components/list-group/' target='_blank'>
                                            <li class="list-group-item ">Go lang</li>
                                        </a>
                                        <a href='https://react-bootstrap.netlify.app/docs/components/list-group/' target='_blank'>
                                            <li class="list-group-item ">Basic Kotlin</li>
                                        </a>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Modal.Body>
                </div>
            </Modal>

            <div>
                <h5>Code Challenge</h5>
                <img onClick={() => setLgShow(true)} src={Codechalenge} alt="" />
            </div>
        </>
    )
}

export default CodeChalenge
