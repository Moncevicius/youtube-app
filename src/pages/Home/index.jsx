import "./styles/index.css"
import {useSelector} from "react-redux";
import {useGetSearchVideosQuery} from "../../store/slices/apiSlice.js";

function Home(){
    // get search field data
    const search = useSelector((state) => state.search.filter);

    // fetch youtube data
    //const { data, isError, isLoading } = useGetSearchVideosQuery('lietuva')
    //console.log(data);

    return (
        <main>
            <h1>Home Page</h1>
            <h2>Search is: {search} </h2>
        </main>
    )
}

export default Home