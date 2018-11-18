import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

class ModalExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      backdrop: "static"
    };

    this.toggle = this.toggle.bind(this);
    this.changeBackdrop = this.changeBackdrop.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.modal !== prevProps.modal)
      return this.setState({ modal: true });
    return null;
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  changeBackdrop(e) {
    let value = e.target.value;
    if (value !== "static") {
      value = JSON.parse(value);
    }
    this.setState({ backdrop: value });
  }

  render() {
    return (
      <Fragment>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          backdrop={this.state.backdrop}
        >
          <Form>
            <ModalHeader>Login to view posts</ModalHeader>
            <ModalBody>
              <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input
                  required
                  type="text"
                  autoComplete="current-username"
                  name="user"
                  id="username"
                  placeholder="Enter Username..."
                  onChange={this.props.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input
                  required
                  type="password"
                  name="pass"
                  className="mb-4"
                  autoComplete="current-password"
                  id="password"
                  placeholder="Enter Password..."
                  onChange={this.props.handleChange}
                />
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button
                type="submit"
                htmlFor="loginForm"
                color="primary"
                onClick={this.props.handleLogin}
              >
                LOGIN
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
      </Fragment>
    );
  }
}
Modal.propTypes = {
  // boolean to control the state of the popover
  isOpen: PropTypes.bool,
  autoFocus: PropTypes.bool,
  // if modal should be centered vertically in viewport
  centered: PropTypes.bool,
  // corresponds to bootstrap's modal sizes, ie. 'lg' or 'sm'
  size: PropTypes.string,
  // callback for toggling isOpen in the controlling component
  toggle: PropTypes.func,
  role: PropTypes.string, // defaults to "dialog"
  // used to reference the ID of the title element in the modal
  labelledBy: PropTypes.string,
  keyboard: PropTypes.bool,
  // control backdrop, see http://v4-alpha.getbootstrap.com/components/modal/#options
  backdrop: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(["static"])]),
  // allows for a node/component to exist next to the modal (outside of it). Useful for external close buttons
  // external: PropTypes.node,
  // called on componentDidMount
  onEnter: PropTypes.func,
  // called on componentWillUnmount
  onExit: PropTypes.func,
  // called when done transitioning in
  onOpened: PropTypes.func,
  // called when done transitioning out
  onClosed: PropTypes.func,
  className: PropTypes.string,
  wrapClassName: PropTypes.string,
  modalClassName: PropTypes.string,
  backdropClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  // boolean to control whether the fade transition occurs (default: true)
  fade: PropTypes.bool,
  cssModule: PropTypes.object,
  // zIndex defaults to 1000.
  zIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  innerRef: PropTypes.object
};

export default ModalExample;
