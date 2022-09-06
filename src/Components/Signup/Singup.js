import React, { useState } from "react";
// import "./signup.css";
import { Form, Row, Col, FormGroup, FormControl, FormLabel, Button, Stack } from "react-bootstrap";
function Singup() {
    const [input, setInput] = useState({
        fname: "",
        lname: "",
        mobile: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        captcha: "",
        check: "",
    });
    const inputHandler = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };
    return (
        <div className="">
            <Row><Col md={8}>
            <Form>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <FormLabel for="fname">First Name</FormLabel>
                            <FormControl
                                id="fname"
                                name="fname"
                                placeholder="Enter"
                                type="text"
                                onChange={inputHandler}
                                value={input.fname}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <FormLabel for="lname">Last Name</FormLabel>
                            <FormControl
                                id="lname"
                                name="lname"
                                placeholder="Enter"
                                type="text"
                                onChange={inputHandler}
                                value={input.lname}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <FormLabel for="exampleAddress">Email</FormLabel>
                            <FormControl
                                id="exampleEmail"
                                name="email"
                                placeholder="Enter Email Id"
                                type="email"
                                onChange={inputHandler}
                                value={input.email}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <FormLabel for="exampleAddress">Contact No</FormLabel>
                            <FormControl
                                id="exampleEmail"
                                name="mobile"
                                placeholder="Enter Contact No"
                                type="number"
                                onChange={inputHandler}
                                value={input.mobile}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <FormLabel for="exampleAddress">Address</FormLabel>
                    <FormControl
                        id="exampleAddress"
                        name="address"
                        placeholder="Enter Your Address"
                        type="text"
                        onChange={inputHandler}
                        value={input.address}
                    />
                </FormGroup>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <FormLabel for="exampleCity">City</FormLabel>
                            <FormControl
                                id="exampleCity"
                                name="city"
                                type="text"
                                onChange={inputHandler}
                                value={input.city}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <FormLabel for="exampleState">State</FormLabel>
                            <FormControl
                                id="exampleState"
                                name="state"
                                type="text"
                                onChange={inputHandler}
                                value={input.state}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <FormLabel for="exampleZip">Zip</FormLabel>
                            <FormControl
                                id="exampleZip"
                                name="zip"
                                type="number"
                                onChange={inputHandler}
                                value={input.zip}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            {/* <FormLabel for="fname">First Name</FormLabel> */} <br />
                            <FormControl
                                id="captcha"
                                name="captch"
                                value={"rendom num"}
                                onChange={inputHandler}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <FormLabel for="captcha">Enter Captcha</FormLabel>
                            <FormControl
                                id="captcha"
                                name="captcha"
                                placeholder="Enter"
                                type="text"
                                onChange={inputHandler}
                                value={input.captcha}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup check>
                    {/* <FormControl
                        id="exampleCheck"
                        name="check"
                        type="checkbox"
                        onChange={inputHandler}
                        value={input.check}
                    />
                    <FormLabel check for="exampleCheck">
                        Check me out
                    </FormLabel> */}
                </FormGroup>
                <br />

                <Button color="warning" style={{ width: 300 }}>
                    Sign Up
                </Button>
                </Form>
            </Col>
                
            <Col md={{offset:1,span:3}}>
                    <Stack>
                        
                <Col md={5}>
                    <Button color="primary">SignUP with Google</Button>
                </Col>
                <Col md={4}>
                    <Button color="success">SignUP with Facebook</Button>
                </Col>
                <Col md={4}>
                    <Button color="info">SignUP with Linkedin</Button>
                </Col>
            </Stack>
            </Col></Row>
        </div>
    );
}
export default Singup;