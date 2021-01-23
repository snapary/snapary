import React, { useState } from "react";
import { Form } from "reactstrap";
import { Button } from "reactstrap";
import "./Register.css";

function Register() {
    const [email, setEmail] = useState("");
    const [password0, setPassword] = useState("");
    const [password1, confirmPassword] = useState("");

    function valid_passwords() {
        return password0 === password1;
    }

    return (
        <div className="Register">
            <Form.Group size="lg" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    autoFocus
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Group>
            <Form.Group size="lg" controlId="password0">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    value={password0}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>
            <Form.Group size="lg" controlId="passwor10">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    value={password1}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>
            <Button block size="lg" type="Register" disabled={valid_passwords()}>
                Register
            </Button>
        </div>
    );
}

export default Register