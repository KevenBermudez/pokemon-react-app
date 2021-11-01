import React from 'react'

const Searchbar = () => {
    return (
        <div className="search-container row mt-3 mb-3">
            <div className="search-bar form-group col-md-6 col-sm-8 col-8">
                <input placeholder='Buscar pokemon...' />
            </div>
            <div className="search-btn form-group col-md-2 col-sm-2 col-3">
                <button className="btn btn-primary">Buscar</button>
            </div>
        </div>
    )
}

export default Searchbar;