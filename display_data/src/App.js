import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { fname: '', regno: '', address: '', phone: '', tagged: false };
    this.updatefname = this.updatefname.bind(this);
    this.updateregno = this.updateregno.bind(this);
    this.updateaddress = this.updateaddress.bind(this);
    this.updatephone = this.updatephone.bind(this);
  };
  updatefname(event) {
    event.preventDefault();
    {
      this.setState({ fname: event.target.value });
    }
  }
  updateregno(event) {
    event.preventDefault();
    {
      this.setState({ regno: event.target.value });
    }
  }
  updateaddress(event) {
    event.preventDefault();
    {
      this.setState({ address: event.target.value });
    }
  }
  updatephone(event) {
    event.preventDefault();
    {
      this.setState({ phone: event.target.value });
    }
  }
  change(event) {
    if (this.state.fname == '' && this.state.regno == '' && this.state.address == '' && this.state.phone == '') {
      this.setState({ tagged: false })
      console.log("please enter details");
    }
    else {
      this.setState({ tagged: true })
    }
    event.preventDefault();

    console.log("watch your detail above");
  }

  render() {
    const { fname, regno, address, phone } = this.state;
    return (
      <div>
      <form >
        <h1 class="wel">Welcome</h1>
        <div align="center" class="welcome">
          <p class="name" align="center">Name:
          <input type="text" class="input" value={this.state.fname} onChange={this.updatefname} ></input></p>
          <p class="regno" align="center">Regno:
          <input type="text" class="input" value={this.state.regno} onChange={this.updateregno}></input></p>
          <p class="address" align="center">Address:
          <input type="text" class="input" value={this.state.address} onChange={this.updateaddress}></input></p>
          <p class="phno" align="center">Phone no:
          <input type="text" class="input" value={this.state.phone} onChange={this.updatephone}></input></p>

          <button type="submit" class="button" name="submit" onClick={(event) => this.change(event)}>{this.state.tagged ? 'submitted' : 'submit'}</button>
          <button type="submit" class="button" name="cancel">Cancel</button>
        </div>
      </form>
      <div class="ans">
      {this.state.tagged && <p class="font">{fname}</p>}
      {this.state.tagged && <p class="font">{regno} </p>}
      {this.state.tagged && <p class="font">{address}</p>}
      {this.state.tagged && <p class="font">{phone}</p>}
    </div>
    </div>
    );
  }
}


export default App;
