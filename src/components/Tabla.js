import React from "react";
import { TablaRow } from "./TablaRow";


export const Tabla = () => {

    let peliculas = [{
        titulo: 'Billie Elliot',
        duracion: '123',
        rating: '5',
        generos: ['Drama', 'Comedia'],
        premios: '2'
    },
    {
        titulo: 'Alicia en el pais de las Maravillas',
        duracion: '180',
        rating: '4.8',
        generos: ['Drama', 'Comedia', 'Terror'],
        premios: '5'
    }];

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Titulo</th>
            <th scope="col">Duracion</th>
            <th scope="col">Rating</th>
            <th scope="col">Genero</th>
            <th scope="col">Premios</th>
          </tr>
        </thead>
        <tbody>
          {peliculas.map( (pelicula, index) => {
            return <TablaRow {...pelicula} key={index} /> //envio elemento de toda interacion con spray operator
          } )}
          <tr>
            <th scope="row">Titulo</th>
            <th>Duracion</th>
            <th>Rating</th>
            <th>Genero</th>
            <th>Premios</th>
          </tr>
        </tbody>
      </table>
    </>
  );
};
