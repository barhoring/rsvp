import React from 'react';
import PropTypes from 'prop-types';

const Header = props =>
    <header>
        <h1>RSVP</h1>
        <p>A Treehouse App</p>
        <form onSubmit={props.newGuestSubmitHandler}>
            <input
            type="text"
            onChange={props.handleNameInput}
            value={props.pendingGuest}
            placeholder="Invite someone"
            />
            <button type="submit" name="submit" value="submit">Submit</button>
        </form>
    </header>

Header.PropTypes = {
    newGuestSubmitHandler: PropTypes.func.isRequired,
    handleNameInput: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired
}

export default Header;