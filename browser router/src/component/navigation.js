import React,{Component} from 'react' 
import {NavLink} from 'react-router-dom'

class Navigation extends Component{
    render() {
    return(
        
        <div>
            <p><NavLink to='/' class="nav">Home</NavLink>
            <NavLink to='/about' class="nav">Register</NavLink>
            <NavLink to='/contact' class="nav">Login</NavLink></p>
        </div>
    );
    }
}

export default Navigation;