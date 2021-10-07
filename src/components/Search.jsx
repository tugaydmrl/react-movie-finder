import "./Search.scss"
import { SearchOutlined } from "@ant-design/icons"
import { useState } from "react"

const Search = () => {
    const [movie, setMovie] = useState("");
    const [data, setData] = useState()
    const URL = "https://www.omdbapi.com/?apikey=2ac5a6fd&type=movie&s="

    const handleClick = () => {
        fetch(`${URL}${movie}`).then(res => res.json()).then(data => setData(data.Search))
    }
    console.log(data)
    return (
        <div classname="container">
            <div className="titleSection">
                <h1 className="title">OMDb API</h1>
                <h3 className="subTitle">The Open Movie Database 🍿</h3>
            </div>
            <div className="searchSection">
                <div className="searchContainer">
                    <div className="searchAndResults">
                        <div className="search">
                            <h5 className="searchTitle">Movie title</h5>
                            <SearchOutlined className={movie ? "searchIcon passive" : "searchIcon"} style={{fontSize: "24px"}} />
                            <span className={movie ? "searchIcon passive" : "searchIcon"} style={{marginLeft: "30px"}}>search</span>
                            <input type="text" className="searchBar" value={movie} onChange={e => setMovie(e.target.value)} />
                            <div className="buttons">
                                <span className="clearButton" onClick={() => setMovie("")}>clear</span>
                                <button className="submitButton" onClick={() => handleClick()}>search</button>
                            </div>
                        </div>
                        <div className="results" style={data ? {height: "202px"} : {height: "56px"}}>
                            <span className="initialText">Search results will appear here</span>
                            <span className={data ? "infoText" : "infoText passive"}>click on a movie title to learn more about it</span>
                            <div className={data ? "movieResults" : "movieResults passive"}>
                                <ul className="movies">
                                    {data && (
                                        <>
                                            <li className="movie"><a href={data[0].Poster}>{data[0].Title}</a></li>
                                            <li className="movie"><a href={data[1].Poster}>{data[1].Title}</a></li>
                                            <li className="movie"><a href={data[2].Poster}>{data[2].Title}</a></li>
                                        </>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search
