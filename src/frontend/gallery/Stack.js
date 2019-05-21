import React from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css'

export default class Stack extends React.Component{
  render() {
    let {id, name} = this.props;
    return(
      <Link to={`/${id}`} className='item'>
        <img src={require(`../common/images/${id}.jpg`)} alt={name} />
        <div className="overlay">
          <h1 >{name}</h1>
        </div>
      </Link>
    );
  }
}
