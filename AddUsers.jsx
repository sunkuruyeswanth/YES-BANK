import React, { Fragment, useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import {useHistory} from 'react-router-dom';


const AddUser = () => {
    let history = useHistory();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        pan: "",
        account: ""

    });

    const { name, username, email, phone , pan, account} = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3003/users", user);
        history.push('/home');
    };
    return (
        <Fragment>
            <div className='adduser'>
            <Card style={{ width: '24rem' }}>
            <Card.Body style={{backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH6ICD56z3HYH-qGmfQ03BJlcUEAt3VtJAVA&usqp=CAU")` ,backgroundSize: 'cover'}}>
                <Card.Title className='demo'>Add User</Card.Title>
                <Card.Text >
                <Form onSubmit={e => onSubmit(e)}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label style={{ marginRight: '300px', fontSize: '15px' }}>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your Name" size="sm" name="name" value={name}
                            onChange={e => onInputChange(e)} />

                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label style={{ marginRight: '300px', fontSize: '15px' }}>UserName</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your User Name" size="sm" name="username" value={username}
                            onChange={e => onInputChange(e)} />

                    </Form.Group>
                
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label style={{ marginRight: '300px', fontSize: '15px' }}>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your E-mail Address" size="sm" name="email" value={email}
                            onChange={e => onInputChange(e)} />

                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label style={{ marginRight: '300px', fontSize: '15px' }}>MobileNo</Form.Label>
                        <Form.Control type="mobile" placeholder="Enter your Phone Number" size="sm" name="phone" value={phone}
                            onChange={e => onInputChange(e)} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label style={{ marginRight: '300px', fontSize: '15px' }}>PanNo</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Pan Number" size="sm" name="pan" value={pan}
                            onChange={e => onInputChange(e)} />

                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label style={{ marginRight: '300px', fontSize: '15px' }}>AccountNo</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Account Number" size="sm" name="account" value={account}
                            onChange={e => onInputChange(e)} />

                    </Form.Group>
                    <button className="btn btn-primary btn-block">Add User</button>
                    
                </Form>
                </Card.Text>
                </Card.Body>
            </Card>
            </div>
        </Fragment>
    )
}
export default AddUser;