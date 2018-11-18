import React, { Component } from "react";
import TopBar from "./components/TopBar";
import { injectGlobal } from "styled-components";
import styled from "styled-components";
// import Auth from "./components/Auth/Auth";
import MainPage from "./components/Content/MainPage";
import LoginModal from "./components/Modal/LoginModal";

const StyledApp = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f1f1f1;
  color: #333;
  font-family: "PT Sans", sans-serif;
`;

injectGlobal`
.width-100 {
  width: 100%;
}
.border-bottom-grey {
  border-bottom: 1px solid lightgrey;
}
@font-face {
  font-family: "PT Sans";
  font-style: italic;
  font-weight: 400;
  src: local("PT Sans Italic"), local("PTSans-Italic"),
    url(https://fonts.gstatic.com/s/ptsans/v9/jizYRExUiTo99u79D0e0x8mN.ttf)
      format("truetype");
}
@font-face {
  font-family: "PT Sans";
  font-style: italic;
  font-weight: 700;
  src: local("PT Sans Bold Italic"), local("PTSans-BoldItalic"),
    url(https://fonts.gstatic.com/s/ptsans/v9/jizdRExUiTo99u79D0e8fOydLxUY.ttf)
      format("truetype");
}
@font-face {
  font-family: "PT Sans";
  font-style: normal;
  font-weight: 400;
  src: local("PT Sans"), local("PTSans-Regular"),
    url(https://fonts.gstatic.com/s/ptsans/v9/jizaRExUiTo99u79D0KEwA.ttf)
      format("truetype");
}
@font-face {
  font-family: "PT Sans";
  font-style: normal;
  font-weight: 700;
  src: local("PT Sans Bold"), local("PTSans-Bold"),
    url(https://fonts.gstatic.com/s/ptsans/v9/jizfRExUiTo99u79B_mh0O6tKA.ttf)
      format("truetype");
}
* {
  box-sizing: border-box;
}
html,
body {
  margin: 0;
  padding: 0;
}
body {
  background-color: #f1f1f1;
  color: #333;
  font-family: "PT Sans", sans-serif;
}
#root {
  width: 100%;
}

`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      pass: "",
      isLoggedIn: false,
      modal: false
    };
  }

  componentDidUpdate(prevState) {
    if (this.state.isLoggedIn !== prevState.isLoggedIn) {
      this.setState({
        isLoggedIn: prevState.isLoggedIn
      });
    }
  }

  handleLogout = e => {
    localStorage.removeItem("user");
    this.setState({
      isLoggedIn: false
    });
    window.location.reload();
  };

  handleLogin = e => {
    localStorage.setItem("user", this.state.user);
    this.setState({
      modal: true,
      isLoggedIn: true
    });
    if (this.state.user !== "" && this.state.pass !== "") {
      return setTimeout(() => {
        window.location.reload();
      }, 0);
    } else {
      return null;
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <StyledApp>
        <LoginModal
          modal={this.state.modal}
          handleLogin={this.handleLogin}
          handleChange={this.handleChange}
        />
        <TopBar
          handleLogout={this.handleLogout}
          handleLogin={this.handleLogin}
        />
        <MainPage />
      </StyledApp>
    );
  }
}

export default App;
