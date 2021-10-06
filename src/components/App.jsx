import React, { Component } from 'react';
import DisplayName from './DisplayName/DisplayName';
import NamesList from './NamesList/NamesList';
import AlertUser from './AlertUser/AlertUser';
import SuperHeroTable from './SuperHeroTable/SuperHeroTable';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            firstName: 'N.',
            lastName: 'Hawkins',
            names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly'],
            superheroes:[
                {
                    superheroId: 1,
                    name: 'Batman',
                    primaryAbility: 'Wealthy',
                    secondaryAbility: 'Rich'
                },
                {
                    superheroId: 2,
                    name: 'Superman',
                    primaryAbility: 'Super strength',
                    secondaryAbility: 'Fly'
                },
                {
                    superheroId: 3,
                    name: 'Spiderman',
                    primaryAbility: 'Spider senses',
                    secondaryAbility: 'Shoots web'
                }
            ],
         }
    }

    alertMessage = () => {
        alert('devCodeCamp')
    }

    render() { 
        return (
            <div className="container-fluid">
                <DisplayName firstName={this.state.firstName} lastName={this.state.lastName} />
                <NamesList names={this.state.names} />
                <SuperHeroTable superHeroes={this.state.superheroes} />
                <AlertUser alert={this.alertMessage} />
            </div>
          );
    }
}
 
export default App;