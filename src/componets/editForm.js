import React from 'react'

export const EditForm = ({movie,getDataMovie,setList,setEdit}) => {

    const saveEdit = (e,id)=>{
        e.preventDefault()

        let target = e.target;

        const moviesStorage = getDataMovie();
        const indexMovie = moviesStorage.findIndex(movie => movie.id === id)

        let movieSave = {
            id,
            title: target.title.value,
            description: target.description.value,
            imgMovie: target.imgMovie.value
        }

        moviesStorage[indexMovie] = movieSave;

        setList(moviesStorage)

        localStorage.setItem('movies',JSON.stringify(moviesStorage))

        setEdit(0)

    }

  return (
    <div className='editContent'>
        
    <form onSubmit={e => saveEdit(e,movie.id)}> 
    <h1>{movie.title}</h1>
        <input type='text'
        className='inputEdit'
        name='title'
        defaultValue={movie.title}
        ></input>
    <input type='text'
        className='inputEdit'
        name='description'
        defaultValue={movie.description}
        ></input>

    <input type='file'
                className='imgMovie'
                name='imgMovie'
                accept=".jpg, .jpeg, .png"></input>

        <input type='submit'
        value="Save"></input>
    </form>

    </div>
  )
}
