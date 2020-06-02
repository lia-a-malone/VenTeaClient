import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class WorkoutNew extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
            cope: ''
        };
    }

    handleChange = (event) => {
        // try console.log(event) to see when this method will be invoked
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:3000/newpost`, {
            method: 'POST',
            body: JSON.stringify({ log: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => res.json())
            .then((logData) => {
                // after we create a log we want to pull that data from the server.
                this.props.updateWorkoutsArray()
                this.setState({
                    title: '',
                    description: '',
                    cope: ''
                })
            })
    }

    render() {
        return (
            <div>
                <h3>Spill the tea</h3>
                <hr />
                {/* after the form is submitted the data gets sent to the method above*/}
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input id="title" type="text" name="title" value={this.state.title} placeholder="Title" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="tea">Spill the Tea</Label>
                        <Input type="text" name="tea" id="tea" value={this.state.tea} onChange={this.handleChange} placeholder="Type">
                            {/* <option></option>
                            <option value="Time">Time</option>
                            <option value="Weight">Weight</option>
                            <option value="Distance">Distance</option> */}
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="cope">Coping Mechanisms</Label>
                        <Input id="cope" type="text" name="cope" value={this.state.cope} placeholder="Ways I cope" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit" color="primary"> Submit </Button>
                </Form>
            </div>
        )
    }
}

export default WorkoutNew;