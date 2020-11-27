import React from 'react';
import {Card,Button, CardColumns} from 'react-bootstrap';

const link  = "https://www.google.com"

function Cards() {
    return (
        <CardColumns className="alignText">
            <Card className="alignText" border="light">
                <Card.Body>
                    <Card.Title>For Institutions</Card.Title>
                    <Card.Text>
                        Institutions can now conduct their examinations, unit tests and class tests online using our product.
                        Contact our representative <a href="">here</a>.
                    </Card.Text>
                    <Button variant="info">Register</Button>
                    <Card.Text>
                        <small><Card.Link href="#demo">Request for demo here</Card.Link></small>
                        <br/>
                        <small>Already a user? Login <Card.Link href="/login">here</Card.Link></small>
                    </Card.Text>
                </Card.Body>
            </Card>
    
            <Card className="alignText" border="light">
                <Card.Body>
                    <Card.Title>For Students</Card.Title>
                    <Card.Text> 
                        Welcome to the new examination era! Students can now give their school examinations on our portal.
                        Just regitser or login using the information provided by the school.
                    </Card.Text>
                    <Button variant="info">Register</Button>
                    <small><Card.Text >Already a user? Login <Card.Link href="/login">here</Card.Link></Card.Text></small>

                </Card.Body>
            </Card>
        </CardColumns>
    );
}

export default Cards;