import React, { Component } from 'react';
import DisplayName from './DisplayName/DisplayName';
import NamesList from './NamesList/NamesList';
import AlertUser from './AlertUser/AlertUser';
import SuperHeroTable from './SuperHeroTable/SuperHeroTable';
import AddSuperhero from './AddSuperhero/AddSuperhero';
import DisplayJoke from './DisplayJoke/DisplayJoke';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            firstName: 'N.',
            lastName: 'Hawkins',
            names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly'],
            tableHeads:['ID', 'Name', 'Primary Ability', 'Secondary Ability'],
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

    addSuperhero = (newHero) => {
        let newSuperheroes = this.state.superheroes
        newSuperheroes.push(newHero)
        this.setState({
            superheroes: newSuperheroes
        })
    }

    render() { 
        return (
            <div className="container-fluid">
                <DisplayName firstName={this.state.firstName} lastName={this.state.lastName} />
                <AlertUser alert={this.alertMessage} />
                <NamesList names={this.state.names} />
                <SuperHeroTable superHeroes={this.state.superheroes} headers={this.state.tableHeads} />
                <AddSuperhero addNewHero={this.addSuperhero} />
                <DisplayJoke />

            </div>
          );
    }
}
 
export default App;