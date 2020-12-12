import React from 'react';
import {Card,Button, CardColumns} from 'react-bootstrap';
import { render } from '@testing-library/react';
import Navigation from '../Navigation';

function Business() {
    return(
    <div>
    <Navigation/>
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
                <small>Already a user? Login <Card.Link href="login">here</Card.Link></small>
            </Card.Text>
        </Card.Body>
    </Card>
    </div>
    );
}

export default Business;