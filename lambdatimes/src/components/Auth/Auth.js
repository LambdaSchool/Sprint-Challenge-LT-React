import React, { Component } from "react";

const Auth = MainPage =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoggedIn: false
      };
    }

    componentDidMount() {
      this.setState({
        isLoggedIn: true
      });

      if (!localStorage.getItem("user")) {
        this.setState({
          isLoggedIn: false
        });
      } else {
        this.setState({
          isLoggedIn: true
        });
      }
    }

    render() {
      if (this.state.isLoggedIn) return <MainPage />;
      return null;
    }
  };

export default Auth;
