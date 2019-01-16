import React from 'react';
import Card from './Card';
import './List.css'

function List(props) {
    return (
        <section role="region" className="List">
            <header role="banner" className="List-header">
            <h2>{props.header}</h2>
            </header>
            <div className="List-cards">
                {props.cards.map(card =>
                    <Card
                        key={card.id}
                        title={card.title}
                        content={card.content}
                    />    
                )}
                <button className="add-new">
                    + Add New Card
                </button>
            </div>
        </section>
    )
}

export default List;