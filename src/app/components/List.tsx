import Link from "next/link";
import "./style/list.css";

export default function List({ e }) {
     return (
          <Link href={`/pokemon/${e.id}`}>
               <div key={e.id}>
                    <img src={e.image} alt={e.name} />
                    <h1>{e.name}</h1>
               </div>
          </Link>
     );
}
