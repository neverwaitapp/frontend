import axios from "axios";
import React from "react";

export default function Event(props) {
    console.log(props)
    const { event } = props;
    const { _id, name, description, date, location} = event;

    return (
        <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">{date}</p>
                <p className="card-text">{location}</p>
            </div>
            <button id={_id} className="btn btn-success rounded" style={{ width: "100px" }}>Join</button>
            

        </div>
    )

}