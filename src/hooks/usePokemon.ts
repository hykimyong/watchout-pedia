import axios, { AxiosResponse } from 'axios';
import React from 'react';
import { UseQueryResult, useQuery } from 'react-query';

import { PokemonResponse } from '../types/indexPokemon';

const pokemonApi = (id?: string) => axios.get(`https://pokeapi.co/api/v2/pokemon/${id||''}`,{params:{limit:151}});

const usePokemon = <T>(id?: string): UseQueryResult<AxiosResponse<T>,Error> =>{
    return useQuery(id?['pokemon',id] : 'pokemon', () => pokemonApi(id));
}

export default usePokemon;