import React, { useEffect } from "react";
import './style.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import {AiFillStar} from "react-icons/ai/index"


const App = () => {
    
    useEffect(()=>{
        fetch('https://api.github.com/repos/facebook/react/issues').then(res=>res.json())
        .then(data => console.log(data))
    })
    return(
        <>
        <Container fluid="lg">
            <Row sm={12}>
                <Col sm={10} className='column'>
                    <Form.Control type="text" placeholder="Enter repo URL" />
                </Col>
                <Col sm={2} className='column'>
                    <Button variant="outline-dark">Load issues</Button>
                </Col>
            </Row>
        </Container>

        <Container fluid = "lg">
            <Row>
                <Col sm={1}>
                    <Link to={'/'}>Facebook</Link>
                </Col>
                <Col sm={1}>
                    <span className="next">{">"}</span>
                </Col>
                <Col sm={1}>
                    <Link to={'/'}>React</Link>
                </Col>
                <Col sm={2}>
                    <span> <AiFillStar className="star-icon"/> {'194 K stars'} </span>
                </Col>
            </Row>
        </Container>

        <Container fluid="lg">
            <Row className="list-container">
                <Col lg={3} className="list-wrap">
                    <Row>
                        <Col  className='column'>
                            <h4 className="list-title">ToDo</h4>
                        </Col>
                    </Row>
                    {/* Card */}
                    <Row className="issue-item-container">
                        <Container className="issue-item-wrap">
                            <Row>
                                <Col>
                                    <h5 className="issue-item-title">Some issue title</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <span>#315 opened 3 days ago</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <span>Admin | Coments: 3</span>
                                </Col>
                            </Row>
                        </Container>

                        <Container className="issue-item-wrap">
                            <Row>
                                <Col>
                                    <h5 className="issue-item-title">Some issue title</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <span>#315 opened 3 days ago</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <span>Admin | Coments: 3</span>
                                </Col>
                            </Row>
                        </Container>

                        <Container className="issue-item-wrap">
                            <Row>
                                <Col>
                                    <h5 className="issue-item-title">Some issue title</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <span>#315 opened 3 days ago</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <span>Admin | Coments: 3</span>
                                </Col>
                            </Row>
                        </Container>


                        <Container className="issue-item-wrap">
                            <Row>
                                <Col>
                                    <h5 className="issue-item-title">Some issue title</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <span>#315 opened 3 days ago</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <span>Admin | Coments: 3</span>
                                </Col>
                            </Row>
                        </Container>
                    </Row>
                </Col>

                <Col lg={3} className="list-wrap">
                <Row>
                        <Col  className='column'>
                            <h4 className="list-title">In Progress</h4>
                        </Col>
                    </Row>
                    {/* Card */}
                    <Row className="issue-item-container">
                        <Container className="issue-item-wrap">
                            <Row>
                                <Col>
                                    <h5 className="issue-item-title">Some issue title</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <span>#315 opened 3 days ago</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <span>Admin | Coments: 3</span>
                                </Col>
                            </Row>
                        </Container>

                        <Container className="issue-item-wrap">
                            <Row>
                                <Col>
                                    <h5 className="issue-item-title">Some issue title</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <span>#315 opened 3 days ago</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <span>Admin | Coments: 3</span>
                                </Col>
                            </Row>
                        </Container>

                        <Container className="issue-item-wrap">
                            <Row>
                                <Col>
                                    <h5 className="issue-item-title">Some issue title</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <span>#315 opened 3 days ago</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <span>Admin | Coments: 3</span>
                                </Col>
                            </Row>
                        </Container>


                        <Container className="issue-item-wrap">
                            <Row>
                                <Col>
                                    <h5 className="issue-item-title">Some issue title</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <span>#315 opened 3 days ago</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <span>Admin | Coments: 3</span>
                                </Col>
                            </Row>
                        </Container>
                    </Row>
                </Col>

                <Col lg={3} className="list-wrap">
                <Row>
                        <Col  className='column'>
                            <h4 className="list-title">Done</h4>
                        </Col>
                    </Row>
                    {/* Card */}
                    <Row className="issue-item-container">
                        <Container className="issue-item-wrap">
                            <Row>
                                <Col>
                                    <h5 className="issue-item-title">Some issue title</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <span>#315 opened 3 days ago</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <span>Admin | Coments: 3</span>
                                </Col>
                            </Row>
                        </Container>

                        <Container className="issue-item-wrap">
                            <Row>
                                <Col>
                                    <h5 className="issue-item-title">Some issue title</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <span>#315 opened 3 days ago</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <span>Admin | Coments: 3</span>
                                </Col>
                            </Row>
                        </Container>

                        <Container className="issue-item-wrap">
                            <Row>
                                <Col>
                                    <h5 className="issue-item-title">Some issue title</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <span>#315 opened 3 days ago</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <span>Admin | Coments: 3</span>
                                </Col>
                            </Row>
                        </Container>


                        <Container className="issue-item-wrap">
                            <Row>
                                <Col>
                                    <h5 className="issue-item-title">Some issue title</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <span>#315 opened 3 days ago</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <span>Admin | Coments: 3</span>
                                </Col>
                            </Row>
                        </Container>
                    </Row>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default App;
