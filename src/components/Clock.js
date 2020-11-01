import React, { Component } from 'react'

export default class Clock extends Component {
    state = {
        hour: new Date().getHours()+ this.props.time,
        minute: new Date().getMinutes(),
        second: new Date().getSeconds()
    }
    twoDigit(number) {
        return String(number).length === 2 ? number : "0" + number
    }
    tick() {
        if (this.state.second === 59) {
            if (this.state.minute === 59) {
                if (this.state.hour === 23) {
                    this.setState({ hour: 0 })
                } else {
                    this.setState({ hour: +this.state.hour, minute: 0, second: 0 })
                }
            } else {
                this.setState({ minute: +this.state.minute, second: 0 })
            }
        } else {
            this.setState({ second: +this.state.second })
        }
    }
    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {

        return (
            <div class="locationClock" style={{ color: "#8b6508", backgroundColor: `rgb(0,0,${51 + 15 * this.props.order})`, height: "150px" }}>
                <h2>{this.props.location}</h2>
                <h2>{this.twoDigit(this.state.hour)}:{this.twoDigit(this.state.minute)}:{this.twoDigit(this.state.second)}</h2>


            </div>
        )
    }
}
