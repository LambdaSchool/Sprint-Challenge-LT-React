import React from 'react';
import TopBar from '../components/TopBar';
import Header from '../components/Header';

const Authenticate = App => 
  class extends React.Component {
    constructor() {
      super();
      this.state ={
        loggedIn: false
      }
    }

    componentDidMount() {
      if(localStorage.getItem('username') !== null && localStorage.getItem('password') !== null) {
        this.setState({loggedIn: true})
      }
    }

    render() {
      if(this.state.loggedIn === true) {
        return <App />
      } else {
        return (
          <div className="App">
            <TopBar loggedIn={this.state.loggedIn}/>
            <Header />
            <div>
              Must Login in to see the Site
            </div>
          </div>
        )
      }
    }
  }


export default Authenticate;