import React, { Component } from "react";
import PropTypes from 'prop-types';

class Autonomia extends Component{
    render() {
        console.log(this.props.km);
        return(
            <ul>
                <li>Autonomía: {this.props.km} km</li>
            </ul>
        )
    }
}

Autonomia.propTypes = {
    km: PropTypes.number.isRequired
}

export default Autonomia;