import React, { Component } from 'react';


class AddSuperhero extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            superheroId: '',
            name: '',
            primaryAbility: '',
            secondaryAbility: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addNewHero(this.state)
    }

    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                <label>Unique ID</label>
                <input name="superheroId" onChange={this.handleChange} value={this.state.superheroId} />
                <br />
                <label>Name</label>
                <input name="name" onChange={this.handleChange} value={this.state.name}  />
                <br />
                <label>Primary Ability</label>
                <input name="primaryAbility" onChange={this.handleChange} value={this.state.primaryAbility}  />
                <br />
                <label>Secondary Ability</label>
                <input name="secondaryAbility" onChange={this.handleChange} value={this.state.secondaryAbility}  />
                <br />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
 
export default AddSuperhero;