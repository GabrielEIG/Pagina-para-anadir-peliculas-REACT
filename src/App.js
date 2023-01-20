import { Buscador } from "./componets/Buscador";
import { Create } from "./componets/Create";
import { PeliItem} from "./componets/peliItem";
import { useState } from 'react'

function App() {

    const [list,setList] = useState([])


  return (
    <div className="layout">
            <header className="header">
                <h1>F i l i F i l m s</h1>
            </header>
            {/*Barra de navegacion */}
            <nav className="nav">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Movies</a></li>
                    <li><a href="#">Series</a></li>
                    <li><a href="#">MyList</a></li>
                    <li><a href="#">Download</a></li>
                </ul>
                
            </nav>
    


        <section className="content">
            {/*aqui van las peliculas */}
            <PeliItem list={list} setList={setList}/>
            
        </section>


        <aside className="lateral">
            <Buscador list={list} setList={setList}/>

            {/*Aqui se estaran agregando las peliculas */}
            
            <Create setList={setList}/>
        </aside>



        <footer className="footer">
            &copy; Master en JavaScript ES12 y TypeScript - <a href="#">FiliFilms.com</a>
        </footer>

    </div>
  );
}

export default App;
