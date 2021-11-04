import { Card } from "./Card"

export const CardList = ({ data, removeCard, updateCard }) => {
    return (
        <div className='cards'>
            { data.length ? 
                data.map(card => (
                    <Card 
                        key={card.name} 
                        card={card} 
                        removeCard={removeCard}
                        updateCard={updateCard}
                    />)
                ) : <h3>Please, enter your cities</h3> 
            }
        </div>
    )
}