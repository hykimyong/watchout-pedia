import React from 'react';
import { useParams } from 'react-router-dom';

type Params = {
    id: string;
}

const DetailPokemonPage: React.FC = () =>{
    const {id} = useParams<Params>();

    return(
        <div>DetailPokemonPage  id : {id}</div>
    )
}
export default DetailPokemonPage;
