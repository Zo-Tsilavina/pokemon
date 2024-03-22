import React, { useState } from "react";;
import  List from "./List";
import "./style/pokemonList.css"

export default function PokemonList(){
     let[types, setType] = useState([
               {id:1, image: "/images/pikachu.png", content:"Pikachu"},
               {id:2, image: "/images/Bulbasaur.png", content:"Bulbasaur"},
               {id:3, image: "/images/charmander.png", content:"Charmander"}
     ]);
     return(
          <>
               <div className="container">
                    {types.map((type) =>(
                         <List key={type.id} e={type}/>
                    ))}
               </div>
          </>
     );
}    