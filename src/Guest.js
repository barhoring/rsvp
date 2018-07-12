import React from 'react';
import PropTypes from 'prop-types';
//import Guest from './Guest';
import GuestName from './GuestName';
import btnText from './btnText';

const Guest = props => 
    <li>
        <GuestName
            isEditting={props.isEditting} 
            handleNameEdits={e => props.setName(e.target.value)}
        >
            {props.name}
        </GuestName>
        <label>
            <input
                type="checkbox" 
                checked={props.isConfirmed}
                onChange={props.handleConfirmation}
                /> 
            Confirmed
        </label>
        <btnText isEditting={props.isEditting} />
        <button id="btnEditSave" onClick={props.handleToggleEditting} >edit</button>
        <button>remove</button>
    </li>



Guest.propTypes = {
    name: PropTypes.string.isRequired,
    isConfirmed: PropTypes.bool.isRequired,
    isEditting: PropTypes.bool.isRequired,
    handleConfirmation: PropTypes.func.isRequired,
    handleToggleEditting: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired
};

export default Guest;