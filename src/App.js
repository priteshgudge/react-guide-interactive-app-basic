import React, {Component} from 'react';
import './App.css';

import './CharComponent/CharComponent.css'

// import UserInput from './UserInput/UserInput'
// import UserOutput from './UserOutput/UserOutput'

import UserTextInput from './UserTextInput/UserTextInput'
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'

class App extends Component {

  state = {
    length: 0,
    strVal : '',
  }
  

  onStringLenghtChangeHandler = (props) =>{
    this.setState({
      length:props.length,
      strVal: props.stringValue,
    })
  }

  renderCharComponents = () => {
    //debugger;
    if (this.state.strVal == null || this.state.strVal.length === 0){
      return null;
    }else{
      this.state.strVal.split('').map((ch,index) => {
        debugger;
        return <CharComponent value={ch} key={index} />;
      })
    
    };
  }

  render() {
    const renderCharComponents = () => {
      debugger;
      if (this.state.strVal == null || this.state.strVal.length === 0){
        return null;
      }else{
        this.state.strVal.split('').map((ch,index) => {
          debugger;
          return <CharComponent value={ch} key={index} />;
        })
      
      };
    }
    return (
      <div className="App">
        {/* <UserInput onChange={this.changeNameHandler} ></UserInput> */}
        {/* <UserOutput userName={this.state.userName} change={this.changeNameHandler} ></UserOutput> */}
        {/* <UserInput  userName={this.state.userName} onChangeVal={this.changeNameHandler} /> */}
        {/* <UserOutput userName={this.state.userName} /> */}
        {/* <UserOutput userName="Pritesh"/> */}
        <UserTextInput onChangehandler={this.onStringLenghtChangeHandler}/>
        <ValidationComponent stringLength={this.state.length} />
        <CharComponent value="A"/>
        {renderCharComponents()}

        {/* {'FOOBAR'.split('').map(a =>
          <CharComponent value={a} /> )} */}
      </div>
    );
  }
}
export default App;