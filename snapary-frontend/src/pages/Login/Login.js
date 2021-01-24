import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Redirect } from "react-router-dom";
import "./Login.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [data, setData] = useState("");

    function validateForm() {
        return username.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        alert('A form was submitted: ' + username);
        var jsonData = JSON.stringify({'username': username, 'password': password});
        console.log(jsonData);

        fetch('/api/user/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': "*"
            },
            body: JSON.stringify(jsonData)
          }).then(response => console.log(response));
    
        event.preventDefault();
    }
    
    return (
        <>
            <div className="login-bg">
                <div className="Login">
                    <Form>
                        <Form.Group size="lg" controlId="username" style={{"padding-top": '6rem'}}>
                            <Form.Label style={{"font-weight": "700", "font-size": "40", "lineHeight": "3"}}>Username</Form.Label>
                            <Form.Control
                                autoFocus
                                type="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="password">
                            <Form.Label style={{"font-weight": "700", "font-size": "40", "lineHeight": "3"}}>Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Button block size="lg" type="submit" disabled={!validateForm()} onClick={handleSubmit}>
                            Login
                        </Button>
                    </Form>
                    <h1>
                        {data}
                    </h1>
                </div>
            </div>
        </>
    );
}

export default Login