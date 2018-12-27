/**
 * Import
 */
import React from "react";
import { render } from "react-dom";
import Person from "./view/Person";

/**
 * Variables
 */
const root = document.querySelector("#root");

/**
 * Declaration
 */
class App extends React.Component {
    state = {
        person: [
            { name: "Lucas", age: 23 },
            {name: 'Tommy', age: 22}
        ],
        test: "don't change",
        showPerson: false
    }
    switchNameHandler = () => {
        let d = this.state.showPerson;
        this.setState({
            person: [
                { name: "Max", age: 23 },
                { name: 'Tommy', age: 22 }
            ],
            showPerson: !d,
        });
    }
    alertHandler = () => {
        alert(`This is an alert !!`);
    }
    getNameHandler = event => {
        this.setState({
            person: [
                {name: event.target.value, age: 23}
            ]
        });
    }
    render() {
        if (this.state.showPerson) {
            return (
                <React.Fragment>
                    {
                        this.state.person.map(el => {
                            return <Person name={el.name} age={el.age} alert={this.alertHandler}/>
                        })
                    }
                    <button onClick={this.switchNameHandler}>Switch name</button>
                    <input type="text" onChange={this.getNameHandler}></input>
                </React.Fragment>
            );
        } else {
            return (
                <button onClick={this.switchNameHandler}>Switch name</button>
            );
        }
    }
}

/**
 * Execution
 */
render(<App/>, root);