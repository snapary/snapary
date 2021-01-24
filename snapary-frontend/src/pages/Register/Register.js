import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Register.css";
import "../Login/Login.css"
import { useHistory } from "react-router-dom";

function Register() {
    const [email, setEmail] = useState("");
    const [password0, setPassword] = useState("");
    const [password1, confirmPassword] = useState("");
    let history = useHistory();

    function valid_passwords() {
        return password0 === password1;
    }

    const handleSubmit = (event) => {
        alert('A form was submitted: ' + email);
        var jsonData = JSON.stringify({'username': email, 'password': password0});
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
                <div className="Register" style={{"paddingTop": '6rem'}}>
                    <Form.Group size="lg" controlId="email">
                        <Form.Label style={{"fontWeight": "700", "fontSize": "40", "lineHeight": "3"}}>Username</Form.Label>
                        <Form.Control
                            autoFocus
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password0">
                        <Form.Label style={{"fontWeight": "700", "fontSize": "40", "lineHeight": "2"}}>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password0}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="passwor10">
                        <Form.Label style={{"fontWeight": "700", "fontSize": "40", "lineHeight": "2"}}> Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password1}
                            onChange={(e) => confirmPassword(e.target.value)}
                        />
                    </Form.Group> 
                    <Button block size="lg" type="Register" disabled={valid_passwords()} onClick={handleSubmit}>
                        Register
                    </Button>
                </div>
            </div>
        </>
    );
}

export default Register