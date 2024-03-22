import Link from "next/link";
import "./style/list.css"

export default function List(e){
     return(
          <>
               <Link href={`pokemon/${e.id}`}>
                    <div key={e.id} className="container">
                         <img src={e.image} alt="pokemon"/>
                         <h1>{e.content}</h1>
                    </div>
               </Link>
          </>
     )
}