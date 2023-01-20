import React, { useState } from 'react'
import { SaveInfoStorage } from '../helpers/SaveInfoStorage';


export const Create = ({setList}) => {

    const titleForm = "Anadir pelicula";
    const [movie,setMovie] = useState({
        title:'',
        description:'',
        imgMovie: ''
    })
    const [file, setFile] = useState(null)

    const getFormValue = (e)=>{
        e.preventDefault()

        

        //get values of form

        let target = e.target;
        

        let title = target.title.value;
        let description = target.description.value;
        let imgMovie = file.name;
        console.log(file)

        
        
        

        //Create objet of movie for save

        let movieObj = {
            id: new Date().getTime(),
            title,
            description,
            imgMovie
        }
        setMovie(movieObj)

        setList(element =>{
            return [...element,movieObj]
        })

        //llamndo la funcion de guardado del objeto de movie
        SaveInfoStorage('movies',movieObj)
        
    }


    



  return (
    <div className="add">

                <h3 className="title">{titleForm}</h3>

                <form onSubmit={e =>getFormValue(e)}>
                    <input type="text" placeholder="Title"
                    name='title' />
                <textarea
                placeholder="Description"
                name='description'></textarea>
                <input type='file'
                className='imgMovie'
                name='imgMovie'
                onChange={(e) => setFile(e.target.files[0])}
                multiple
                ></input>
                    <input type="submit" value="Save" />
                </form>

            </div>
  )
}
