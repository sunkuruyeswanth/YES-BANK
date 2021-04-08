import React, { Fragment, useState, useEffect } from 'react';
import { Form, Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


const UserView = (props) => {
    const [user, setUser] = useState({
                    name: "",
                    username: "",
                    email: "",
                    phone: "",
                    pan: ""
                });
                const { id } = useParams();
                useEffect(() => {
                    loadUser();
                }, []);
        
                const loadUser = async () => {
                    const res = await axios.get(`http://localhost:3003/users/${id}`);
                    setUser(res.data);
                }
        
                return (
                    <div style={{backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSOIekftVu82jXDTGGpdwILCH1xu7JgXPt6w&usqp=CAU")` ,backgroundSize: 'cover'}}>
                    <Fragment>
        
                        <Card style={{backgroundImage: `url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NCggICAgICAgHBwoHBwcHCA8ICQcNFREWFhURExMYHSggGBoxGxMTITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0NDw8PFSsZFRkrKysrKysrLTcrKzcrKystNy0rKysrKy0rKy0tNysrNy0tKystLSsrLSsrLS0rKystK//AABEIAOAA4QMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAABAAIDBQQH/8QAIRABAQEBAQACAQUBAAAAAAAAAAERAhIxUUEhYYGRoQP/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EABsRAQEBAQADAQAAAAAAAAAAAAARAQISITFB/9oADAMBAAIRAxEAPwD9osAnTTo8/wBZO/asCocZ65aQSuPlm8vo8i8rWN4fNYy+i8M3hque8OKdLyPK1JrmK3Z+osKzGP5BsTTOqU6CCISKgUqD+ysMiEUbgkVRvPSNqgoHf3/1LEL7dWp0ymHb46ylylblSNZpsDUqsRYJSyYGarGbHQWFNxysFdLGbGmNxx6R6gactZsF5aVVncc/Ka02LUjKw4ZCkYwyNYUpBhxIaiokKAWqDCI0ghqukrUc5WpWHbNaMUqRY1K1GGoaZqoaCLplQQU4zY1qD64dRnHbrlny1XLeXPGeo6+WeotZ3lyxqHy1OVrOcshvGcF3AjiwAjixQI4UGcONYAiDSFZLJHWN81uVyjUrMXHQxjmtosagqhQESIQIgSFYIRRjPXLaoRz8ny3ixani5YMdcZsKzvLnixvGVZgxY1ikCM4caxYVYzgx0xYVYx5LfkFPF82lz0+mo3W5WpXPVpGa6yt89OE6anSQr6JTK+edtTtIvk7/ACnH01P+iQ8sbtSllOIv0QpBFiq0AYLVaxaJut6qzD0oKKkrKWigRqUxiVqUXNaSlKNJJCvP0aA6sNejrCVl01a56dSDp6M6ctalIjp6anTlplSJ7dp0689vllblTcXN3H1atcOe/t01iOmdVqVMynQqokMIGKqFGnNNWKRWYMZxsBGcMhxYtSKFYcRrEkkaeXqCd3MoalQoICZQYg1GozCjUaWiFGd5bldOa4x05TWZHWFmN8st4VDI3IzW8xmRpYkajPUUjSwqRnBjbNi03GUcQyiCKiEK8haqHoYhCOBAkgjULMp0G5SxK1Ky1jUajDURNbjpz+XOOnKazrUajLXLKY6cukc+XSVjXbkrEkaGFIFgwoIzgxsWLU3GE1YMGYEUo8ZIx6ERSRQiFTcBSGTGozGpUaahghiGtxtiNc38Msa3G+a5txNR25ajlzXSMa6c63KqI1WW1ENVApIVJIELCgZwlCR4hBelCEgSSESRGRG+YMMAmBqMq1DAUTcMb5rm1Bl2lalcZW50zuK781uvnl+nXjpncbzSZ8CmI0lqxIFA6LUkgSSB4i04sepx9jU0gCJxEEJkIqUjWFGoJGpFDGVixoENCRGFGmWkDK681yjrymtZjrzWsY4dHPXSBFAMGFAFpGCHUMIPGQL0uSSIRSNSKQouYkgKdQQNRpmNIrUI5KERCRCYyYI3zHXlz5dOWddOW58ukcnSVjWykhEChAjgCJJA8VIyPS4mNSCFGkkgSBESRFMMUKK1yRCi/hBiRAYDFRrl15co6csa3y6mMwsttynWI1UZOrRBQrSZ1aFKWoHjSNJPS5pJIiRQAoihqBqRFUJxIrUShRYoQ0EGLC1IlIJG4I1E1rMb5LEbZUtRiNQRGqiIyEbAokkI/9k=")` ,backgroundSize: 'cover', width: '24rem' }}>
                            <Card.Body>
                                <Card.Title className='demo'>User Id</Card.Title><br />
                                <Card.Text>
                                    <ListGroup>
                                       
                                        <ListGroup.Item>Name: {user.name}</ListGroup.Item>
                                        <ListGroup.Item>User name: {user.username}</ListGroup.Item>
                                        <ListGroup.Item>Email: {user.email}</ListGroup.Item>
                                        <ListGroup.Item>Phone: {user.phone}</ListGroup.Item>
                                        <ListGroup.Item>Pan No: {user.pan}</ListGroup.Item>
                                       
                                        <br />
                                        <Link className="btn btn-primary" to="/home">Back to YES BANK User List page</Link>
                                    </ListGroup>
                                </Card.Text>
                            </Card.Body>
                        </Card>
        
        
        
        
            </Fragment>
 
            </div>
 )

}
export default UserView;
