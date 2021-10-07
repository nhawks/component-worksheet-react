import React from 'react';
import './SuperHeroTable.css'


function SuperHeroTable(props) {
    return ( 
        <div>
            <h2>Superheroes Table</h2>
            <table>
                <thead>
                <tr>
                    {props.headers.map((header) =>
                        <th>{header}</th>
                    )}
                </tr>
                </thead>
                <tbody>
                    {props.superHeroes.map((superhero) =>
                        <tr>
                            <td>{superhero.superheroId}</td>
                            <td>{superhero.name}</td>
                            <td>{superhero.primaryAbility}</td>
                            <td>{superhero.secondaryAbility}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <br />
        </div>
     );
}

export default SuperHeroTable;