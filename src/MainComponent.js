import Login from './LoginComponent'
import axios from 'axios'
import { Component } from 'react'


class Main extends Component {
    constructor(props){
        super(props)
        this.state={
            currentUser: null,
            loginError: null
        }

        
    }

    onLoginClick = (username, password) =>{
        console.log('login clicked')
        axios({
            method: 'post',
            url: 'http://localhost:5000',
            data: {
                username: username,
                password: password
            }
        })
        .then(res=>{
            console.log(res.data)
            if(res.data.success===true){
                this.setState({
                    currentUser: res.data.currentUser
                })
            } else {
                this.setState({
                    loginError: res.data.error
                })
            }
            
        })
    }

    render=()=>{
        if(this.state.currentUser){
            return(
                <>{this.state.currentUser.username}</>
            )
        }
        return(
            <Login
                onLoginClick={this.onLoginClick}
                loginError={this.state.loginError}></Login>
        )
    }
}
export default Main