import axios from 'axios';
import React, {useState} from 'react';
import {url} from '../helpers/url';
import {fileUpload} from '../helpers/fileUpload';
import '../styles/Form.css';

export const Form = () => {

    const [pizza, setPizza] = useState({
        nombre: '',
        tipo: '',
        numero: '',
        telefono: '',
        celular: '',
        ingredientes: '',
        imagen: ''
    })

    const {nombre,ingredientes,imagen} = pizza;

    const postData = () => {
        axios.post(url,pizza)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
        
    }

    const handleChanged = ({target}) => {
        setPizza({
        ...pizza,
        [target.name]: target.value
        })
    
    }

    const handleSubmit = (e) => {
    e.preventDefault();
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        fileUpload(file)
        .then(response => {
            pizza.imagen = response;
        }).catch(error => {
            console.log(error.message)
        }) 
    }

    return (
        <div>
        <form id="formulario" onSubmit={handleSubmit}>
        <h2>Registro de pizza</h2>
        <hr/>
            <div>
                <label>Nombre</label>
                <input id="inputNombre" name="nombre" value={nombre} onChange={handleChanged}/>
            </div>
            <div>
                <label>Ingredientes</label>
                <input id="inputIngredientes" name="ingredientes" value={ingredientes} onChange={handleChanged}/>
            </div>
            <div>
                <label>Imagen</label>
                <input id="botonImagen" type="file" name="imagen" value={imagen}    onChange={handleFileChange}/>
                    
            </div>
            <div>
                <button onClick={() => postData()} id="btnRegistro">Enviar</button> 
            </div>
        </form>
        </div>
    )
}
