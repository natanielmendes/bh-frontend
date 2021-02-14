import React, { Component } from 'react';

class CreateEvent extends Component {
    
    handleSave = (event) => {
        event.preventDefault();
        console.log('click')
    }

    render() {
        return (
            <form className="col-md-4">
                <div className="input-group mb-3">
                    <span className="input-group-text" id="first-name">First Name</span>
                    <input type="text" className="form-control" aria-label="First name input" aria-describedby="first-name-input"></input>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="last-name">Last Name</span>
                    <input type="text" className="form-control" aria-label="Last name input" aria-describedby="last-name-input"></input>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="email">Email</span>
                    <input type="text" className="form-control" aria-label="Email input" aria-describedby="email-input"></input>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="event-date">Event Date</span>
                    <input type="date" className="form-control" aria-label="Event date input" aria-describedby="event-date-input"></input>
                </div>
                <div className="form-group">
                    <button type="button" className="btn btn-outline-primary col-md-3 mr-3" onClick={this.handleSave}>Save</button>
                    <button type="button" className="btn btn-outline-secondary col-md-3" onClick={this.handleClear}>Clear</button>
                </div>
            </form>
        )
    }
}

export default CreateEvent;