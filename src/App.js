import React, {Component} from 'react';
import './App.css';
import Instruction from './Instruction';
import UserOutput from './UserOutput/UserOutput'
import UserInput from "./UserInput/UserInput";

class App extends Component {
    state = {
        username: "[username]"
    };

    changeNameHandler = (event)=>{
        this.setState({username: event})
    };

    render() {
        return (
            <div className="App">
                <Instruction/>
                <UserInput changed={this.changeNameHandler}/>
                <UserOutput username={this.state.username}/>
                <UserOutput username="Vinh Thuy"/>
            </div>
        );
    }
}

export default App;
