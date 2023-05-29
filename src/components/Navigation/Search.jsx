import "./styles/Search.css"
function Search(){
    return (
        <>
            <div>
                <input className="search-input" name="search" type="text" placeholder="What are you looking for?"/>
                <button className="search-submit">Search</button>
            </div>
        </>
    )
}

export default Search