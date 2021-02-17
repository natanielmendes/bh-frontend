import React, { Component } from 'react';
import axios from 'axios';
import classes from './CreateEvent.module.css';

class CreateEvent extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        eventDate: new Date().toISOString().substr(0,10)
    }

    isRequired() {

    }

    handleFirstName = (event) => {
        this.setState({ firstName: event.target.value });
    }

    handleLastName = (event) => {
        this.setState({ lastName: event.target.value })
    }

    handleEmail = (event) => {
        this.setState({ email: event.target.value })
    }

    handleEventDate = (event) => {
        this.setState({ eventDate: event.target.value })
    }

    handleSave = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3001/event', this.state).then(result => {
            this.props.handleEventListUpdate();
        });
    }

    handleClear = (event) => {
        event.preventDefault();
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            eventDate: new Date().toISOString().substr(0,10)
        });
    }

    render() {
        return (
            <div className="col-xs-12">
                <div className="input-group mb-3">
                    <span className="input-group-text" id="first-name">First Name*</span>
                    <input type="text" 
                        value={this.state.firstName} 
                        onChange={this.handleFirstName}
                        className={this.state.firstName.length ? 'form-control' : 'form-control' + classes.error}
                        required
                        aria-label="First name input" 
                        aria-describedby="first-name-input">
                    </input>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="last-name">Last Name*</span>
                    <input type="text" 
                        value={this.state.lastName}
                        onChange={this.handleLastName} 
                        className={this.state.lastName.length ? 'form-control' : 'form-control' + classes.error}
                        required
                        aria-label="Last name input" 
                        aria-describedby="last-name-input">
                    </input>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="email">Email*</span>
                    <input type="text" 
                        value={this.state.email}
                        onChange={this.handleEmail} 
                        className={this.state.email.length ? 'form-control' : 'form-control' + classes.error}
                        required
                        aria-label="Email input" 
                        aria-describedby="email-input">
                    </input>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="event-date">Event Date</span>
                    <input type="date" 
                        value={this.state.eventDate}
                        onChange={this.handleEventDate} 
                        className="form-control" 
                        aria-label="Event date input" 
                        aria-describedby="event-date-input">
                    </input>
                </div>
                <div className="form-group">
                    <button type="button" className="btn btn-outline-primary col-md-3 mr-3" onClick={this.handleSave}>Save</button>
                    <button type="button" className="btn btn-outline-secondary col-md-3" onClick={this.handleClear}>Clear</button>
                </div>
            </div>
        )
    }
}

export default CreateEvent;