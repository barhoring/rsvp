import React from 'react';
import PropTypes from 'prop-types';

const Guest = props => 
    <li>
        <GuestName>{props.name}</GuestName>
        <label>
            <input
                type="checkbox" 
                checked={props.isConfirmed}
                onChange={props.handleConfirmation}
                /> 
            Confirmed
        </label>
        <button onClick={props.handleEditting}>edit</button>
        <button>remove</button>
    </li>

Guest.propTypes = {
    name: PropTypes.string.isRequired,
    isConfirmed: PropTypes.bool.isRequired,
    isEditting: PropTypes.bool.isRequired,
    handleConfirmation: PropTypes.func.isRequired,
    handleEditting: PropTypes.func.isRequired
};

export default Guest;