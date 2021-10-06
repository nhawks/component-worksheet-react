import React, { Component } from 'react';
import DisplayName from './DisplayName/DisplayName';
import NamesList from './NamesList/NamesList';
import AlertUser from './AlertUser/AlertUser';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            firstName: 'N.',
            lastName: 'Hawkins',
            names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly']
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
                <AlertUser alert={this.alertMessage} />
            </div>
          );
    }
}
 
export default App;