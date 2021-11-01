import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar';
import Pokedex from './components/Pokedex';
import Footer from './components/Footer';
import { searchPokemons, getPokemonUrl } from './Services/api'
const { useState, useEffect } = React

function App() {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);

  const getPokemons = async () => {
    setLoading(true)
    const data = await searchPokemons(20,20 * page)
    const promises = data.results.map( async (pokemon) => {
      return await getPokemonUrl(pokemon.url);
    })
    const results = await Promise.all(promises)
    setPokemons(results)
    setLoading(false)
    setTotal(Math.ceil(data.count / 20))
  }

  useEffect(() => {
    getPokemons()
  }, [page])

  return (
    <>
      <Navbar />
      <div className="container">
        <Searchbar />
        <Pokedex 
          loading={loading}
          pokemons={pokemons} 
          page={page}
          setPage={setPage}
          total={total}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
