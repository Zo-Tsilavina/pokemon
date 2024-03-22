"use client"

import { useState } from "react";
import List from "../components/List";
import "./style/page.css"

export default function Home(){
     let[type, setType] = useState([
          {id:1, image: "/images/pikachu.png", name:"Pikachu"},
          {id:2, image: "/images/Bulbasaur.png", name:"Bulbasaur"},
          {id:3, image: "/images/charmander.png", name:"Charmander"}
     ]);
     return (
          <>
               <div className="container">
                    {type.map((pokemon) =>(
                         <List key={pokemon.id} e={pokemon}/>
                    ))}     
               </div> 
          </>
     )
}