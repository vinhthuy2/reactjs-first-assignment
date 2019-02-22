import React, {Component} from 'react';
import './App.css';
import Instruction from './Instruction';
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
    state = {
        users: [
            {username: "[username1]"},
            {username: "[username2]"}
        ]
    };

    changeNameHandler = (event) => {
        this.setState({
            users: [
                {username: event.target.value},
                {username: "[username2]"}
            ]
        })
    };

    render() {
        const style = {
          color: "#e24556"
        };
        return (
            <div style={style} className="App">
                <Instruction/>
                <UserOutput changed={this.changeNameHandler} username={this.state.users[0].username}/>
            </div>
        );
    }
}

export default App;
