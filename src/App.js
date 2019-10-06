import React, {Component} from 'react';
import './App.css';


import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'


class App extends Component {

  state = {
    userName: "UserName"
  }
  
  changeNameHandler = (event) => {
    this.setState(
      {
        userName: event.target.value
      }
     )
  };

  render() {
    return (
      <div className="App">
        {/* <UserInput onChange={this.changeNameHandler} ></UserInput> */}
        {/* <UserOutput userName={this.state.userName} change={this.changeNameHandler} ></UserOutput> */}
        <UserInput  userName={this.state.userName} onChangeVal={this.changeNameHandler} />
        <UserOutput userName={this.state.userName} />
        <UserOutput userName="Pritesh"/>
      </div>
    );
  }
}
export default App;