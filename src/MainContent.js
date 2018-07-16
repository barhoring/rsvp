import React from 'react';
import PropTypes from 'prop-types';
import GuestList from './GuestList'
import Counter from './Counter';

const MainContent = props =>
    <div className="main">
        <div>
            <h2>Invitees</h2>
            <label>
                <input type="checkbox" 
                onChange={props.toggleFilter} 
                checked={props.isFiltered}
                /> 
                    Hide those who haven't responded
            </label>
        </div> 
        <Counter numberAttending={numberAttending} numberUnconfirmed={numberUnconfirmed} totalInvited={totalInvited} />

        <GuestList 
            guests={props.state.guests}
            toggleConfirmationAt ={props.toggleConfirmationAt}
            toggleEdittingAt ={props.toggleEdittingAt}
            setNameAt = {props.setNameAt}
            isFiltered = {props.state.isFiltered}
            removeGuestAt ={props.removeGuestAt}
            pendingGuest={props.state.pendingGuest}
        />
    </div>


MainContent.PropTypes = {
    toggleFilter: PropTypes.func.isRequired,
    isFiltered: PropTypes.func.isRequired,
    guests: PropTypes.array.isRequired,
    toggleConfirmationAt: PropTypes.func.isRequired,
    toggleEdittingAt: PropTypes.func.isRequired,
    setNameAt: PropTypes.func.isRequired,
    removeGuestAt: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired
}

export default MainContent;