import React, { Component } from 'react';
import axios from 'axios';

class ListEvents extends Component {

    state = {
        events: []
    }

    componentDidMount = () => {
        axios.get('http://localhost:3001/event').then((res) => {
            const fetchedEvents = [];
                for (let key in res.data) {
                    fetchedEvents.push({
                        ...res.data[key],
                        id: key
                    });
                }
            this.setState({events: fetchedEvents});
            console.log(this.state.events)
        });
    }

    componentDidUpdate(prevState, nextState) {
        if (!Object.keys(prevState).length === 0 && prevState !== nextState) {
            axios.get('http://localhost:3001/event').then((res) => {
                const fetchedEvents = [];
                    for (let key in res.data) {
                        fetchedEvents.push({
                            ...res.data[key],
                            id: key
                        });
                    }
                this.setState({events: fetchedEvents});
                console.log(this.state.events)
            });
        }
    }

    render() {
        let events = []
        for (let eventData of this.state.events) {
            events.push(
                <tr>
                    <th scope="row">{eventData.firstName}</th>
                    <td>{eventData.lastName}</td>
                    <td>{eventData.email}</td>
                    <td>{eventData.eventDate}</td>
                </tr>
            )
        }
        return (
            <table class="table table-hover">
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