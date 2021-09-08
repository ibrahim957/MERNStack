import React from 'react';

export const MovieCard=({name , description , avail, img})=>{
    return(
        <div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={img} alt="Card image cap"/>
    <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text">Available : {avail}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    )
}