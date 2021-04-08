import React, { useState, Fragment, useEffect } from 'react';
import { Form, Button, Card, Alert, Navbar, Nav } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ResetLogin from './ResetLogin';
import Email from './Email';
import Password from './Password';


import { userDetails } from './actions';
import './App.css';
import { connect } from 'react-redux';
import App from './App';


function Admin(props) {
    const [showAlert, setShowAlert] = useState(null);
    const [emailVal, setEmailVal] = useState('');
    const [passwordVal, setPasswordVal] = useState('');
    const [admin, setAdmin] = useState([]);
   

    const emailValueChange = (e) => {
        setEmailVal(e.target.value);
    }

    const passwordValueChange = (e) => {
        setPasswordVal(e.target.value);
    }
    useEffect(() => {
        loadAdmin();
    }, []);

    const loadAdmin = async () => {
        const result = await axios.get("http://localhost:3003/admin");
        setAdmin(result.data.reverse());
    }

    const onSubmit = () => {
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        const isEmailValid = emailRegex.test(emailVal);
        const isPasswordValid = passwordRegex.test(passwordVal);
    
        if (isEmailValid && isPasswordValid) {
            for(let i=0; i< admin.length; i++){
                debugger
                if(emailVal == admin[i].email && passwordVal == admin[i].password){
                     return props.history.push('/home');
                    
                
                }else{
                   if(i == admin.length -1){
                    alert("User name and password not matched");
                
                    } 
                }
            }
        } 
        else {
            alert("Invalid Credentials");
        }
    }

    const goToForgot = () => {
        props.history.push('/ResetLogin');
    }
    return (
        <Fragment>
            <div className="admin">
            <Card style={{ width: '22rem' }}>
                <Card.Body style={{backgroundImage: `url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NCggICAgICAgHBwoHBwcHCA8ICQcNFREWFhURExMYHSggGBoxGxMTITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0NDw8PFSsZFRkrKysrKysrLTcrKzcrKystNy0rKysrKy0rKy0tNysrNy0tKystLSsrLSsrLS0rKystK//AABEIAOAA4QMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAABAAIDBQQH/8QAIRABAQEBAQACAQUBAAAAAAAAAAERAhIxUUEhYYGRoQP/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EABsRAQEBAQADAQAAAAAAAAAAAAARAQISITFB/9oADAMBAAIRAxEAPwD9osAnTTo8/wBZO/asCocZ65aQSuPlm8vo8i8rWN4fNYy+i8M3hque8OKdLyPK1JrmK3Z+osKzGP5BsTTOqU6CCISKgUqD+ysMiEUbgkVRvPSNqgoHf3/1LEL7dWp0ymHb46ylylblSNZpsDUqsRYJSyYGarGbHQWFNxysFdLGbGmNxx6R6gactZsF5aVVncc/Ka02LUjKw4ZCkYwyNYUpBhxIaiokKAWqDCI0ghqukrUc5WpWHbNaMUqRY1K1GGoaZqoaCLplQQU4zY1qD64dRnHbrlny1XLeXPGeo6+WeotZ3lyxqHy1OVrOcshvGcF3AjiwAjixQI4UGcONYAiDSFZLJHWN81uVyjUrMXHQxjmtosagqhQESIQIgSFYIRRjPXLaoRz8ny3ixani5YMdcZsKzvLnixvGVZgxY1ikCM4caxYVYzgx0xYVYx5LfkFPF82lz0+mo3W5WpXPVpGa6yt89OE6anSQr6JTK+edtTtIvk7/ACnH01P+iQ8sbtSllOIv0QpBFiq0AYLVaxaJut6qzD0oKKkrKWigRqUxiVqUXNaSlKNJJCvP0aA6sNejrCVl01a56dSDp6M6ctalIjp6anTlplSJ7dp0689vllblTcXN3H1atcOe/t01iOmdVqVMynQqokMIGKqFGnNNWKRWYMZxsBGcMhxYtSKFYcRrEkkaeXqCd3MoalQoICZQYg1GozCjUaWiFGd5bldOa4x05TWZHWFmN8st4VDI3IzW8xmRpYkajPUUjSwqRnBjbNi03GUcQyiCKiEK8haqHoYhCOBAkgjULMp0G5SxK1Ky1jUajDURNbjpz+XOOnKazrUajLXLKY6cukc+XSVjXbkrEkaGFIFgwoIzgxsWLU3GE1YMGYEUo8ZIx6ERSRQiFTcBSGTGozGpUaahghiGtxtiNc38Msa3G+a5txNR25ajlzXSMa6c63KqI1WW1ENVApIVJIELCgZwlCR4hBelCEgSSESRGRG+YMMAmBqMq1DAUTcMb5rm1Bl2lalcZW50zuK781uvnl+nXjpncbzSZ8CmI0lqxIFA6LUkgSSB4i04sepx9jU0gCJxEEJkIqUjWFGoJGpFDGVixoENCRGFGmWkDK681yjrymtZjrzWsY4dHPXSBFAMGFAFpGCHUMIPGQL0uSSIRSNSKQouYkgKdQQNRpmNIrUI5KERCRCYyYI3zHXlz5dOWddOW58ukcnSVjWykhEChAjgCJJA8VIyPS4mNSCFGkkgSBESRFMMUKK1yRCi/hBiRAYDFRrl15co6csa3y6mMwsttynWI1UZOrRBQrSZ1aFKWoHjSNJPS5pJIiRQAoihqBqRFUJxIrUShRYoQ0EGLC1IlIJG4I1E1rMb5LEbZUtRiNQRGqiIyEbAokkI/9k=")` ,backgroundSize: 'cover'}}>
                   <br></br><br></br>
                    <Card.Title className=''>Admin Login</Card.Title><br />
                    <Card.Subtitle className="mb-2 text-muted"><small>Please check that you are visiting the correct URL</small></Card.Subtitle>
                    <Card.Text>
                        <br />
                        
                        <Form>
                            <div style={{ marginRight: '200px' }}>
                               
                            </div>
                            <Email emailVal={emailVal}
                                emailValueChange={emailValueChange} />

                            <Password
                                passwordVal={passwordVal}
                                passwordChange={passwordValueChange} />

                            <Button variant="warning" size="sm" onClick={onSubmit} block>Log In</Button>
                            {
                                showAlert === true && (
                                    <Alert variant="success">Success</Alert>
                                )}{(showAlert === false &&
                                    <Alert variant="warning">Failure</Alert>
                                )}
                            <br />

                          

                        </Form>
                    </Card.Text>
                </Card.Body>
            </Card>
            <br /><br />
            </div>
        </Fragment>
        
    )
}
const mapStateToProps = (state) => ({userData: state.userData});

function mapDispatchToProps (dispatch) {
    return {
        userDetails: function (userData) {
            return dispatch(userDetails(userData))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
