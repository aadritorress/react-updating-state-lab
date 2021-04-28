// Code DigitalClicker Component Here
import React from 'react'


class DigitalClicker extends React.Component {

// constructor () {
// super()

// this.state = {
//     timesClicked: 0
//     }
// }

state = {
        timesClicked: 0
    }


// handleClick = () => {
// this.setState({
//     timesClicked: +1
// })

// }


handleClick = () => {
        let newClicks = this.state.timesClicked + 1
        this.setState({
            timesClicked: newClicks
        })}


render() {

return (
<div>
    <button onClick={this.handleClick}> {this.state.timesClicked} </button> 
</div>
        )
     }
}


export default DigitalClicker