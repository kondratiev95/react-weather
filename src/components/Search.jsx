export const Search = ({ city, setCity, getData }) => {
    return (
        <div className="search">
            <div>
                <input 
                    type="text"
                    value={city} 
                    onChange={e => setCity(e.target.value)}
                    placeholder='Enter your city'
                />
            </div>
            <div>
                <button 
                    onClick={getData} 
                    className='btn btn-outline-dark'
                    >Search
                </button>
            </div>
        </div>
    )
}