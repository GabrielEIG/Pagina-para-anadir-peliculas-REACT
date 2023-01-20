import React, { useState } from 'react'

export const Buscador = ({list, setList}) => {

  const [search,setSearch] = useState('');
  const [notFound,setNotFound] = useState(false);

  const foundMovie = (e)=>{

    setSearch(e.target.value)

    let moviesFound = list.filter(movie => {
      return movie.title.toLowerCase().includes(search.toLocaleLowerCase())
    })

    
    if (search.length <= 2 || moviesFound <= 0){
      moviesFound = JSON.parse(localStorage.getItem('movies'))
      setNotFound(true)
    }else{
      setNotFound(false)
      
    }
    setList(moviesFound)
    
  }
  

  


  return (
    <div className="search">
                <h3 className="title">Search</h3>

                {(notFound === true && search.length > 1)&& (
                  <span className='notFound'>Sorry the movie not found</span>
                )}

                <form action="">
                    <input type="text"
                    id='searchField'
                    autoComplete='off'
                    value={search} 
                    onChange={foundMovie}/>
                    <button>Find</button>
                </form>
            </div>
  )
}
