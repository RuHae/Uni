import React, { Component } from 'react';


function IngList(props) {
    return(
        <div>
            <p> {props.IngAmount} {props.Ingname}</p>
        </div>
    )

}
export default IngList;