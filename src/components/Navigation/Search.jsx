import "./styles/Search.css"
import {useDispatch, useSelector} from "react-redux";
import {setFilter} from "../../store/slices/searchSlice.js";

function Search(){
    // basically fetch the state from the slice that is stored, in our case - search string.
    const search = useSelector((state) => state.search.filter);

    // call action, using dispatch (more or less same as setValue from useState)
    const dispatch = useDispatch();

    function updateSearch(){
        dispatch(setFilter(document.getElementById("search").value));
    }

    return (
        <>
            <div>
                <input className="search-input" name="search" id="search" type="text" placeholder="What are you looking for?"/>
                <button className="search-submit" type="submit" onClick={updateSearch}>Search</button>
            </div>
        </>
    )
}

export default Search