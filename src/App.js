import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import MainContent from './MainContent';

class App extends Component {

  state = {
    isFiltered: false,
    pendingGuest: "",
    guests: [
      {
        name: 'Treasure',
        isConfirmed: false,
        isEditting: false
      },
      {
        name: 'Nic',
        isConfirmed: true,
        isEditting: false
      },
      {
        name: 'Matt K',
        isConfirmed: false,
        isEditting: false
      }
    ]
  }

  toggleGuestPropertyAt = (property, indexToChange) => 
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if(index === indexToChange){
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

  addNewGuest = () =>  {
    let newGuestName = this.state.pendingGuest;
    this.state.guests.push({
      name: newGuestName,
      isConfirmed: false,
      isEditting: false
    });
    debugger;
    this.setState({
      pendingGuest: ''
    })
  }

  newGuestSubmitHandler = e => {
    e.preventDefault();
    this.setState({
      guests: [
        {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditting: false
        },
        ...this.state.guests
      ],
      pendingGuest: ''
    });
  }


  toggleConfirmationAt = indexToChange =>
      this.toggleGuestPropertyAt("isConfirmed", indexToChange);

  toggleEdittingAt = indexToChange =>{
    debugger;
    this.toggleGuestPropertyAt("isEditting", indexToChange);
  }

  setNameAt = (name, indexToChange) => 
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if(index === indexToChange){
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

  removeGuestAt = index => {
    debugger;
    this.setState({
      guests: [
        ...this.state.guests.slice(0, index),
        ...this.state.guests.slice(index + 1)
      ]
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
        toggleConfirmationAt={this.toggleConfirmationAt}
        toggleEdittingAt={this.toggleEdittingAt}
        setNameAt={this.setNameAt}
        removeGuestAt={this.removeGuestAt}
        pendingGuest={this.state.pendingGuest}
      />
    </div>
    );
  }
}

export default App;
