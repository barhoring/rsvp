import React from 'react';
import PropTypes from 'prop-types';
import Guest from './Guest';

const GuestList = props => 
    <ul>
        {props.guests.map((guest, index) => 
            <Guest 
                key={index} 
                name={guest.name} 
                isConfirmed={guest.isConfirmed} 
                isEditting={guest.isEditting} 
                handleConfirmation={() => props.toggleConfirmationAt(index)} 
                handleToggleEditting={() => props.toggleEdittingAt(index)}
                setName={(newName) => props.setNameAt(newName, index)}
                btnText={props.btnText(index)}               
                />
        )}
    </ul>;

GuestList.propTypes = {
    guests: PropTypes.array.isRequired,
    toggleConfirmationAt: PropTypes.func.isRequired,
    toggleEdittingAt: PropTypes.func.isRequired,
    setNameAt: PropTypes.func.isRequired,
    btnText: PropTypes.func.isRequired
};

export default GuestList;