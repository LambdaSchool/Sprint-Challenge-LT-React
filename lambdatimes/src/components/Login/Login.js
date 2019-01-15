import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      username:'',
      password: ''
    }
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  changeInput = (e) => {
    this.setState({[e.target.name]: e.target.value })
  }

  submit = () => {
    localStorage.setItem('username', this.state.username);
    localStorage.setItem('password', this.state.password)
    this.setState({modal: false});
    window.location.reload();
  }


  render() {
    return (
      <div>
        <Button onClick={this.toggle}>Log In</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} >
            <ModalHeader toggle={this.toggle}>Log In Here To See the Site</ModalHeader>
            <ModalBody>
              <label>Username</label>
              <input name="username" onChange={this.changeInput} />
              <label>Password</label>
              <input name="password" onChange={this.changeInput} />
            </ModalBody>
            <ModalFooter>
              <Button onClick={this.submit}
              color="success"
              >Submit</Button>
            </ModalFooter>
          </Modal>
      </div>
    )
  }

}

export default Login;