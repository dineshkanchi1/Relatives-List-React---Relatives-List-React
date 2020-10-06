import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {
        let relatives = ["Sai", "Munna", "Naresh", "Mouli", "Archana", "Sowji"];

        return(
           <>
            <ol key="relativeList">
            {relatives.map((el, index) => (
                <li key={"relativeListItem" + (index + 1)}>{el}</li>
            ))}
            </ol>
	    </>
        )
    }
}


export default App;
