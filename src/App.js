import React from 'react'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            peopleInSpace: []
        }
    }

    render() {
        return (
        <div>
            {this.state.peopleInSpace.map(person => person.name)}
        </div>
        )
    }
    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(data => {
            this.setState({
                peopleInSpace: data.name
            })
        })
    }
}

export default App
