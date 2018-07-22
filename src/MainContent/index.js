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
                toggleConfirmation ={props.toggleConfirmation}
                toggleEditting ={props.toggleEditting}
                setName = {props.setName}
                isFiltered = {props.isFiltered}
                removeGuest ={props.removeGuest}
                pendingGuest={props.pendingGuest}
            />
        </div>
    );
}

MainContent.propTypes = {
    getTotalInvited: PropTypes.func.isRequired,
    getAttendingGuests: PropTypes.func.isRequired, 
    toggleFilter: PropTypes.func.isRequired,
    isFiltered: PropTypes.bool.isRequired,
    guests: PropTypes.array.isRequired,
    toggleConfirmation: PropTypes.func.isRequired,
    toggleEditting: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired,
    removeGuest: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired
}

export default MainContent;