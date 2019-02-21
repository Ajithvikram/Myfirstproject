import React,{Component} from 'react';

class Data extends Component{
  render()  {
    return(
      <div>
        UserName:{this.props.passedVal}
      </div>
    );
  }
}

export default Data;