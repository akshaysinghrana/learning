import React, { Component } from 'react'

class ClassFormComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comment: '',
            topic: ''
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert(this.state)
    }

    render() {
        const { username, comment, topic } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="text" name="username" value={username} onChange={this.handleChange} />
                </div>
                <div>
                    <input type="textarea" name="comment" value={comment} onChange={this.handleChange} />
                </div>
                <div>
                    <select name="topic" value={topic} onChange={this.handleChange}>
                        <option value="" hidden>Select topic</option>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                        <option value="Vue">Vue</option>
                    </select>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        )
    }
}

export default ClassFormComponent
