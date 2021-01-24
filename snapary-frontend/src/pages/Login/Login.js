import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Redirect, useHistory } from "react-router-dom";
import "./Login.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();

    function validateForm() {
        return username.length > 0 && password.length > 0;
    }

    const handleSubmit = (event) => {
        alert('A form was submitted: ' + username);
        var jsonData = JSON.stringify({'username': username, 'password': password});
        console.log(jsonData);

        fetch('https://snapary.roydu.ca/api/user/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': "*"
            },
            body: JSON.stringify(jsonData)
          }).then(response => {response.json().then(data => {
              console.log(data);
              if (data["success"])
              {
                history.push('/post')
              }
        })});

        event.preventDefault();
        }
        
    
    return (
        <>
            <div className="login-bg">
                <div className="Login">
                    <Form>
                        <Form.Group size="lg" controlId="username" style={{"paddingTop": '6rem'}}>
                            <Form.Label style={{"fontWeight": "700", "fontSize": "40", "lineHeight": "3"}}>Username</Form.Label>
                            <Form.Control
                                autoFocus
                                type="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="password">
                            <Form.Label style={{"fontWeight": "700", "fontSize": "40", "lineHeight": "3"}}>Password</Form.Label>
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
                </div>
            </div>
        </>
    );
}

export default Login