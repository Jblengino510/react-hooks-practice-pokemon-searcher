import React, { useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage({ Data }) {
  const [ pokeArr, setPokeArr] = useState([])
  const [ searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(res => res.json())
    .then(setPokeArr)
  }, [searchTerm])

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search />
      <br />
      <PokemonCollection pokeArr={pokeArr}/>
    </Container>
  );
}

export default PokemonPage;
