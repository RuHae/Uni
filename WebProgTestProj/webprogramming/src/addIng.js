import React, { Component } from 'react';
import IngList from "./IngList.js"



class NewIng extends Component {
    state = {
        IngName : "",
        IngAmount : ""
    }

    DataHandler = () => {
        const data = {
            IngName: this.state.IngName,
            IngAmount: this.state.IngAmount
        }}

    render () {
        return (
            <div>
                <h1>
                    Add new Ingredient:
                </h1>
                <div> 
                <label>Name:</label>
                <input type="text" value={this.state.IngName} onChange={( event ) => this.setState( { IngName: event.target.value } )} />
                </div>
                <div>
                <label>Amount:</label>
                <input type="text" value={this.state.IngAmount} onChange={( event ) => this.setState( { IngAmount: event.target.value } )} />
                </div>
              <button onClick={this.DataHandler}>Add Ingredient</button>

              <div>
                <IngList(props: data)/>
            </div>
            </div>
            
        )
    }
}
export default NewIng;