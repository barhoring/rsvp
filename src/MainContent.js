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
            onChange={this.toggleFilter} 
            checked={this.isFiltered}
            /> 
                Hide those who haven't responded
        </label>
        </div> 
        <Counter numberAttending={numberAttending} numberUnconfirmed={numberUnconfirmed} totalInvited={totalInvited} />

        <GuestList 
        guests={this.state.guests}
        toggleConfirmationAt ={this.toggleConfirmationAt}
        toggleEdittingAt ={this.toggleEdittingAt}
        setNameAt = {this.setNameAt}
        isFiltered = {this.state.isFiltered}
        removeGuestAt ={this.removeGuestAt}
        pendingGuest={this.state.pendingGuest}
        />
    </div>


MainContent.PropTypes = {
    toggleFilter: PropTypes.func.isRequired,
    isFiltered: PropTypes.func.isRequired
}

export default MainContent;