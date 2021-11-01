import React from 'react'
import Pagination from './Pagination';
import Pokemon from './Pokemon';
import Loading from './Loading'

const Pokedex = (props) => {
    const {pokemons, page, setPage, total, loading} = props
    const previousPage = () => {
        const previous = Math.max(page - 1, 0);
        setPage(previous);
    }
    const nextPage = () => {
        const next = Math.min(page + 1, total);
        setPage(next);
    }

    return (
        <div className="mt-3">
            <div className="pokedex-head">
                <h1>Pokédex</h1>
                <Pagination 
                    page={page + 1}
                    total={total}
                    onClickPrevious={previousPage}
                    onClickNext={nextPage}
                />
            </div>
            {
                loading ? <Loading /> :
                <div className="pokedex-list row">
                {
                    pokemons.map((pokemon, index) => {
                        return (
                            <Pokemon pokemon={pokemon} key={pokemon.name} />
                        )
                    })
                }
                </div>
            }
        </div>
    )
}

export default Pokedex;