import React from 'react';
import PropTypes from 'prop-types';
import GuestList from './GuestList'
import Counter from './Counter';
import ConfirmedFilter from './ConfirmedFilter';

const MainContent = props => {
    const totalInvited = props.getTotalInvited();
    const numberAttending = props.getAttendingGuests();
    const numberUnconfirmed = totalInvited - numberAttending;
    return(
        <div className="main">
            <ConfirmedFilter
                toggleFilter={props.toggleFilter}
                isFiltered={props.isFiltered}
            />
            
            <Counter numberAttending={numberAttending} numberUnconfirmed={numberUnconfirmed} totalInvited={totalInvited} />

            <GuestList 
                guests={props.guests}
                toggleConfirmationAt ={props.toggleConfirmationAt}
                toggleEdittingAt ={props.toggleEdittingAt}
                setNameAt = {props.setNameAt}
                isFiltered = {props.isFiltered}
                removeGuestAt ={props.removeGuestAt}
                pendingGuest={props.pendingGuest}
            />
        </div>
    );
}

MainContent.PropTypes = {
    getTotalInvited: PropTypes.func.isRequired,
    getAttendingGuests: PropTypes.func.isRequired, 
    toggleFilter: PropTypes.func.isRequired,
    isFiltered: PropTypes.bool.isRequired,
    guests: PropTypes.array.isRequired,
    toggleConfirmationAt: PropTypes.func.isRequired,
    toggleEdittingAt: PropTypes.func.isRequired,
    setNameAt: PropTypes.func.isRequired,
    removeGuestAt: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired
}

export default MainContent;