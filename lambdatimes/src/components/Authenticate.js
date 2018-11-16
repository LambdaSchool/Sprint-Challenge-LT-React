import React from 'react';
import Login from './Login';

const authenticateHOC = App => 
    class extends React.Component {
        constructor() {
            super();
            this.state = {
                loggedIn: false,
            }
        }


        componentDidMount() {
            if(!localStorage.getItem('user')) {
                this.setState({ 
                    loggedIn: false
                });
            } else {
                this.setState({
                    loggedIn: true
                });
            }
        }


        render() {
            if(this.state.loggedIn) {
                return <App />
            } else {
                return <Login />
            }
        }
    };

export default authenticateHOC;