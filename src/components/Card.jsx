export const Card = ({ card, removeCard, updateCard }) => {
    return (
        <div className="card">
            <h4>{card.weather[0].main}</h4>
            <div className="weather-icon">
                <img src={`http://openweathermap.org/img/w/${card.weather[0].icon}.png`} alt="imgicon" />
            </div>
            <h3>{card.weather.main}</h3>
            <div className="temperature">
                <h1>{parseFloat(card.main.temp - 273.15).toFixed(1)}&deg;C</h1>
            </div>
            <div className="location">
                <h3><i className="fa fa-street-view location"></i> {card.name} | {card.sys.country}</h3>
            </div>
            <div className="card-btns">
                <button 
                    className='btn btn-outline-danger' 
                    onClick={() => removeCard(card.id)}
                    >&times;
                </button>
                <button 
                    className='btn btn-outline-success' 
                    onClick={() => updateCard(card)}
                    >Update
                </button>
            </div>
        </div>
    )
}