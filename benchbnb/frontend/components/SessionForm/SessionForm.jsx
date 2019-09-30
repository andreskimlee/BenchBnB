import React from "react" 

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.update = this.update.bind(this)    
        this.handleSubmit = this.handleSubmit.bind(this)      
    }

    update(field) {
        return e => {this.setState({ [field]: e.target.value })}

    }

    handleSubmit(e) {
        e.preventDefault(); 
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.username} onChange={this.update("username")} />
                <input type="password" value={this.state.password} onChange={this.update("password")} />
                <input type="submit" value={this.props.formType}/>
            </form>
        )

    }

    //...
}

export default SessionForm; 