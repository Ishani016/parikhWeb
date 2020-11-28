import React from 'react';
import {Form,Button, Modal, Col, Row} from 'react-bootstrap';
import Navigation from '../Navigation';
import Cards from '../Cards';
import $ from 'jquery';

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          value: 'student',
          show: false,
          hide: true,
          emailError: '',
          passwordError: '',
          email: '',
          password: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.handleValidation = this.handleValidation.bind(this);
        this.show = this.show.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }

      changeEmail = (e) => {
          this.setState({email: e.target.value});
      }

      changePassword = (e) => {
          this.setState({password: e.target.value});
      }

      show = () => {
        this.setState(
            {
                hide: false,
                show: true
            }
        );
      }

      formSubmit = (event) => {
        event.preventDefault();

        if(this.handleValidation()) {
            alert("Form submitted!");
        } else {
            alert("Form has errors");
        }
      }

      handleValidation = () => {
          let formIsValid = true;
          let emailErr = '';
          let pwdErr = '';
            if(this.state.email.length == 0){
                formIsValid = false;
                emailErr = "Cannot be empty";
            }
    
            if(typeof this.state.email !== "undefined"){
                let lastAtPos = this.state.email.lastIndexOf('@');
                let lastDotPos = this.state.email.lastIndexOf('.');

                if (!(lastAtPos < lastDotPos && lastAtPos > 0 && this.state.email.indexOf('@@') == -1 && lastDotPos > 2 && (this.state.email.length - lastDotPos) > 2)) {
                    formIsValid = false;
                    emailErr = "Email is not valid";
                }
            }  

            if(this.state.password.length == 0){
                formIsValid = false;
                pwdErr = "Cannot be empty";
            }

            this.setState(
                {
                    emailError: emailErr,
                    passwordError: pwdErr
                }
            );
            return formIsValid;
      }
    
      render() {
        return (
        <div>
        <Navigation/>
        <br/>
        <br/>
            <Modal 
            size="lg"
                show={this.show} 
                centered
                id="loginPopUp">
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Sign In
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                </Modal.Body>
                    <Form>
                        <Col>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" onChange={this.changeEmail}></Form.Control>
                            <span className="error">{this.state.emailError}</span>
                        </Col>
                        <br/>
                        <Col>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" onChange={this.changePassword}></Form.Control>
                            <span className="error">{this.state.passwordError}</span>
                        </Col>
                        <br/>
                        <div className="radioButton">
                            <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <input type="radio" id="left" name="userType" value="student" onChange={this.handleChange} defaultChecked/>
                                        <label for="student">Student</label>
                                    </td>
                                    <td>
                                        <input type="radio" id="right" name="userType" value="teacher" onChange={this.handleChange}/>
                                        <label for="teacher">Teacher</label>
                                    </td>
                                </tr>
                            </tbody>
                            </table>    
                        </div>
                        <br/>
                    </Form>
                    <br/>
                <Modal.Footer>
                    <Button variant="secondary" id="closeBtn" href='/'>
                        Close
                    </Button>
                    <Button variant="info" onClick={this.formSubmit}>Sign In</Button>
                </Modal.Footer>   
            </Modal>
            
        </div>
        );
      }
}

export default LoginForm;