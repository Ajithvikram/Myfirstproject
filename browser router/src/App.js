import React,{Component} from 'react';
import Login from './component/contact';
import Data from './component/data';

class Parent extends Component {
  constructor(props){
    super(props);
    this.state={userName:""}
    this.onUpdate=this.onUpdate.bind(this);
  }
  onUpdate = (val)=>{
    this.setState({
      userName:val
    })
  };
  render(){
    return(
      <div>
        UserName:{this.state.userName}<br/>
        <Login onUpdate={this.onUpdate} /><br/>
        <Data passedVal={this.state.userName}/>
      </div>
    );
  }

}

React.render(<Parent/>,document.getElementById('root'));

 

