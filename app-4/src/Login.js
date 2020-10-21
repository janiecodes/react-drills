import React,{Component} from 'react'
import { render } from 'react-dom'

class Login extends Component {
    constructor(){
        super();
        this.state = {
            username: "",
            password: ""
        }

    this.handleLogin = this.handleLogin.bind(this);
    }

    updateUsername(name) {
        this.setState({username: name})
    }

    updatePassword(pw) {
        this.setState({password:pw})
    }

    handleLogin() {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }

    render() {
        return(
            <div>
                <input onChange={e => this.updateUsername(e.target.value)} type="text"/>
                <input onChange={e => this.updatePassword(e.target.value)} type="text"/>
                <button onClick={this.handleLogin}>Login</button>
            </div>
            )
    }
}   

export default Login