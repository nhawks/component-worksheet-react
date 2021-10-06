import React from 'react';
import './SuperHeroTable.css'


function SuperHeroTable(props) {
    return ( 
        <div>
            <h2>Superheroes Table</h2>
            <table>
                <tr>
                    
                </tr>
                {props.superHeroes.map((superhero) =>
                    <tr>
                        <td>{superhero.superheroId}</td>
                        <td>{superhero.name}</td>
                        <td>{superhero.primaryAbility}</td>
                        <td>{superhero.secondaryAbility}</td>
                    </tr>
                )}
            </table>
        </div>
     );
}

export default SuperHeroTable;