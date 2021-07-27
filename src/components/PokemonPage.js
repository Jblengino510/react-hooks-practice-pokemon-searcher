import React, { useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [ pokeArr, setPokeArr] = useState([])
  const [ searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(res => res.json())
    .then(setPokeArr)
  }, [searchTerm])

  function handleAddPokemon(newPokemon){
    setPokeArr([...pokeArr, newPokemon])
  }

  const filteredPokemon = pokeArr.filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPokemon}/>
      <br />
      <Search searchTerm={searchTerm} onChangeSearch={setSearchTerm}/>
      <br />
      <PokemonCollection pokeArr={filteredPokemon}/>
    </Container>
  );
}

export default PokemonPage;
