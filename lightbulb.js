import React, { Component } from 'react';
import './App.css'
class Bulb extends Component{
    constructor (props){
        super(props)
        this.state = {
            light: "Off",
            color: "#FFFFFF",
            onColor: "#FFFF00",
            currentColor: "FFFFFF"
        }
}

    handleChange = () => {
        let newSwitch = this.state.light

        // make a var for newColor
        if(newSwitch === "Off"){
            newSwitch = "On"
            var newColor = this.state.onColor
        } else {
            newSwitch = "Off"
            var newColor = this.state.color
       }

        this.setState({light: newSwitch, currentColor: newColor})
        // this.setState({color: })
    }

    render(){
        const { light, onColor, currentColor } = this.state
        return(
            <div>
                <button style={{backgroundColor: currentColor}} onClick = {this.handleChange}> {light} </button>
            </div>
        )
    }
}


export default Bulb
