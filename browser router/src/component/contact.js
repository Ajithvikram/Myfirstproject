import React,{Component} from 'react';
import {Link} from 'react-router-dom'

class Login extends Component {
    constructor(props){
        super(props);
        this.state={userName:""}
        this.updateState=this.updateState.bind(this);
    }

    updateState=(event) => {
        console.log(event.target.value);
        //this.props.setState(event.target.value);
        this.setState({userName:event.target.value})
    };
    render() {
        return(
            <div>
                <input type="text" placeholder="Enter user name" onChange={this.updateState} value={this.state.userName} />
                <button type="submit" onClick={(event) => this.updateState(event)}><Link to='/data'>login</Link></button>
            </div>
        );
    }
}
export default Login;