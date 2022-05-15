function Search({ ...rest }) {
    return (
        <div className="search-container">
            <input className="search" {...rest} />
        </div>
    )
}

export default Search;