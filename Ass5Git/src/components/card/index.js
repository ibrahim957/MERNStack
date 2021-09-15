import React from 'react';
import './card.css'

export const MovieCard = ({ Title, Poster, ide, editMovie, deleteMovie, AddToMyMovie }) => {
  return (
    <div className="card margin-left" style={{ width: '18rem' }}>
      <div className = "image-container d-flex justify-content-start m-3">
      <img className="card-img-top" src={Poster} alt="Card image cap" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{Title}</h5>
        
        {editMovie ?
          (<button onClick={() => editMovie({ Title, Poster, ide })} className="btn btn-primary btn-color btn-bg-color btn-sm col-xs-2 margin-left">Edit</button>) :(
          <button className="btn btn-primary" onClick={() => AddToMyMovie({ Title, Poster })} className="btn btn-primary btn-color btn-bg-color btn-sm col-xs-2 margin-left">
            Add To My Movie
           </button>)
        }
        {deleteMovie ?
        <button onClick={() => deleteMovie({ Title, Poster, ide })} className="btn btn-primary btn-color btn-bg-color btn-sm col-xs-2 margin-left">Delete</button> : ""
        } 
      
      </div>
    </div>
  )
}
