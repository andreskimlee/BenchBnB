import React from "react" 
import { Link } from 'react-router-dom'

class Greetings extends React.Component {
    constructor(props) {
        super(props) 
        this.props = props 
        
    }


    render () {
         
        const isLoggedIn = this.props.currentUser; 
        return (
            <div>
                {isLoggedIn ? (
                    
                    <header>
                    <h1>{this.props.currentUser.username}</h1>
                    <button onClick={this.props.logout}>Log Out</button>
                    </header>
                ) : ( 
                    <header>
                    <Link to="/signup">Sign Up</Link>
                    <Link to="login">Login</Link>
                    </header>
                )}
            </div>
        )
    }
}

export default Greetings; 