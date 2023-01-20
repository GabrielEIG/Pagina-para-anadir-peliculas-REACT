import React, { useEffect, useState} from 'react'
import { EditForm } from './editForm';
export const PeliItem = ({list,setList}) => {

    // const [list,setList] = useState([]);

    const [edit,setEdit] = useState(0);



    {/* Carga los datos del objeto list donde estan las peliculas */}
    useEffect((e)=>{
        console.log('Cargado correctamente')
        getDataMovie();
    },[]);

    const getDataMovie = ()=>{
        let movie = JSON.parse(localStorage.getItem('movies'))

        setList(movie)

        return movie
    };

    const deletMovie = (idMovie)=>{
      //conseguir peliculas agregadas
      let saveMovie = getDataMovie();

      //filtrar las que no quiero en el listado
      let filterMovies = saveMovie.filter(movie => movie.id !== parseInt(idMovie))
      setList(filterMovies)


      localStorage.setItem('movies',JSON.stringify(filterMovies))
    }

    

  return (
    <>
    {/* recorre el objeto list donde estan agregadas las peliculas */}
    {list != null ?
       list.map(movie => {

    //MOVIE OBJEt
      //title:'',
      //description:'
       return (
        
        <article key={movie.id} className="movie-item">
        <div className="imgBx">
        <img src="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg" alt=""></img>
        </div>
        
        
        <div className="contentTitulo">
            <h3 className="title">{movie.title}</h3>
            <p className="description">{movie.description}</p>    
            <button className="edit" onClick={()=>setEdit(movie.id)}>Edit</button>
            <button className="delete" onClick={()=>{deletMovie(movie.id)}}>Delete</button>           </div>


            {edit === movie.id && (
              <EditForm movie={movie} getDataMovie={getDataMovie}
              setList={setList}
              setEdit={setEdit}/>
            )}

        
    </article> 
    
       ) 
    })
    :
    <h1>Not found any movies</h1>
    
    }


        

    </>
  )
}
