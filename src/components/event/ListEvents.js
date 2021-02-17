import React, { Component } from 'react';


class ListEvents extends Component {

    state = {
        events: []
    }

    render() {
        let events = [];
        for (let eventData of this.props.eventsList) {
            console.log(eventData.key)
            events.push(
                <tr key={eventData.key}>
                    <th>{eventData.firstName}</th>
                    <td>{eventData.lastName}</td>
                    <td>{eventData.email}</td>
                    <td>{eventData.eventDate}</td>
                </tr>
            )
        }
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Event Date</th>
                    </tr>
                </thead>
                <tbody>
                    {events}
                </tbody>
            </table>
        )
    }
}

export default ListEvents;