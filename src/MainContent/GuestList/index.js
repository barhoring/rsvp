import React from 'react';
import PropTypes from 'prop-types';
import Guest from './Guest';
import PendingGuest from './PendingGuest';

const GuestList = props => 
    <ul>
        <PendingGuest name={props.pendingGuest} />
        {props.guests
            .filter((guest) => guest.isConfirmed || !props.isFiltered)
                .map((guest, index) => 
                    <Guest 
                        key={index} 
                        name={guest.name} 
                        isConfirmed={guest.isConfirmed} 
                        isEditting={guest.isEditting} 
                        handleConfirmation={() => props.toggleConfirmation(guest.id)} 
                        handleToggleEditting={() => props.toggleEditting(guest.id)}
                        setName={(newName) => props.setName(newName, guest.id)}
                        handleRemove={() => props.removeGuest(guest.id)}
                        />
        )}
    </ul>;

GuestList.propTypes = {
    guests: PropTypes.array.isRequired,
    toggleConfirmation: PropTypes.func.isRequired,
    toggleEditting: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired,
    isFiltered: PropTypes.bool.isRequired,
    removeGuest: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired
};

export default GuestList;