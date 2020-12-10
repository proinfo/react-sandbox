import React from 'react';
import { useState } from 'react'
import Modal from './modal'
import MovieCreateForm from './movieCreateForm'
import {createMovie} from '../actions'

// Containment
function Sidemenu(props) {
    const categories = props.categories;
    let modal = null

    const handleCreateMovie = (movie) => {
        createMovie(movie).then((movies) => {
            console.log(JSON.stringify(movies))
            modal.closeModal()
        })
    }

    return (
        <div>
            <Modal ref={ele => modal = ele} hasSubmit={false}>
                <MovieCreateForm handleFormSubmit={handleCreateMovie} />
            </Modal>
            <h1 className="my-4">{props.appName}</h1>            
            <div className="list-group">
                { categories.map((categorie, index) => (
                    <a 
                        href="#" 
                        key={`c-${categorie.id}`}
                        className="list-group-item"
                    >{categorie.name}</a>
                ))}                            
            </div>            
        </div>
    );
}

export default Sidemenu;