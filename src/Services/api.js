let urlApi = 'https://pokeapi.co/api/v2/pokemon'

export const searchPokemons = async (limit=10, offset=0) => {
    try{
        const response = await fetch(urlApi + `?limit=${limit}&offset=${offset}`);
        const data = await response.json();
        return data;
    } catch (err){
    }
}

export const getPokemonUrl = async (url) => {
    try{
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err){
    }
}