import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import MainContent from './MainContent';

class App extends Component {

  state = {
    isFiltered: false,
    pendingGuest: "",
    guests: []
  }

  lastGuestId = 0;

  newguestId = () => {
    const id = this.lastGuestId;
    this.lastGuestId += 1;
    return id; 
  };

  toggleGuestProperty = (property, id) => 
    this.setState({
      guests: this.state.guests.map(guest => {
        if(guest.id === id){
          return {
            ...guest,
            [property]: !guest[property]
          }
        }
        return guest;
      })
  });

  handleNameInput =  e => {
    this.setState({
      pendingGuest: e.target.value
    });
  }

  newGuestSubmitHandler = e => {
    e.preventDefault();
    const id = this.newguestId();
    this.setState({
      guests: [
        {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditting: false,
          id
        },
        ...this.state.guests
      ],
      pendingGuest: ''
    });
  }


  toggleConfirmation = id =>
      this.toggleGuestProperty("isConfirmed", id);

  toggleEditting = id =>{
    debugger;
    this.toggleGuestProperty("isEditting", id);
  }

  setName = (name, id) => 
    this.setState({
      guests: this.state.guests.map(guest => {
        if(guest.id === id){
          return {
            ...guest,
            name
          };
        }
        return guest;
      })
  });

  toggleFilter = () =>
    this.setState({
      isFiltered: !this.state.isFiltered
    });

  removeGuest = id => {
    debugger;
    this.setState({
      guests: this.state.guests.filter((guest => guest.id !== id))
    });
  }

  getTotalInvited = () => this.state.guests.length;
  getAttendingGuests = () => 
    this.state.guests.reduce(
      (total, guest) => guest.isConfirmed ? total +1 : total, 0);

  render() {
    return (
      <div className="App">
      <Header 
        newGuestSubmitHandler={this.newGuestSubmitHandler} 
        handleNameInput={this.handleNameInput} 
        pendingGuest={this.state.pendingGuest} 
      />
      <MainContent 
        getTotalInvited={this.getTotalInvited}
        getAttendingGuests={this.getAttendingGuests}
        toggleFilter={this.toggleFilter}
        isFiltered={this.state.isFiltered}
        guests={this.state.guests}
        toggleConfirmation={this.toggleConfirmation}
        toggleEditting={this.toggleEditting}
        setName={this.setName}
        removeGuest={this.removeGuest}
        pendingGuest={this.state.pendingGuest}
      />
    </div>
    );
  }
}

export default App;
