import "./styles/Sort.css"
import {useState} from "react";

function Sort() {
    const [visible, setVisible] = useState(false)

    return (
        <>
            <button className="sort" onClick={() => setVisible(!visible)}></button>
            {visible ? <div className="sort-popup">
                <span>Sort by:</span>
                <button>date</button>
                <button>views</button>
                by word/sentence<input type="text" name="sort-by"/>
            </div> : null}
        </>
    )
}

export default Sort