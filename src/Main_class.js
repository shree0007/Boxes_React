import React, { Component } from "react";
import './Main.css'
import Box from './Box'

class Main extends Component {

    state = {

        persons: [
            { name: 'Mr A', title: 'CEO', age: '28' },
            { name: 'Mr B', title: 'Manager', age: '30' },
            { name: 'Mr C', title: 'Supervisor', age: '25' }

        ]
    }

    addEventHandler = () => {
        this.setState(
            {
                persons: [
                    { name: 'Jack', title: 'CEO', age: '20' },
                    { name: 'Hary', title: 'Manager', age: '22' },
                    { name: 'Henry', title: 'Supervisor', age: '27' }

                ]
            }
        )
    }

    render() {


        const personList = this.state.persons.map(person => {
            return <Box key={person.name} name={person.name} title={person.title} age={person.age} />
        })



        return <main className="main">{personList}

            <button onClick={this.addEventHandler}>Click me</button>






            {/* <Box
                name={this.state.persons[0].name}
                title={this.state.persons[0].title}
                age={this.state.persons[0].age} />


            <Box
                name={this.state.persons[1].name}
                title={this.state.persons[1].title}
                age={this.state.persons[1].age} />


            <Box
                name={this.state.persons[2].name}
                title={this.state.persons[2].title}
                age={this.state.persons[2].age} /> */}

        </main>

    }
}

export default Main;