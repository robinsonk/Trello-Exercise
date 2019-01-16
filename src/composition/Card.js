import React from 'react';
import './Card.css'

function List(props) {
    return (
        <div class="Card">
            <button className="delete">
                delete
            </button>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
          </div>
    )
}

export default List;