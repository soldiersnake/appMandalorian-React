import React from "react";

export const TablaRow = (props) => {

  return (
    <>
      <tr>
        <th scope="row">{props.titulo}</th>
        <td>{props.duracion}</td>
        <td>{props.rating}</td>
        <td>
          <ul>
            {props.generos.map((genero,index) => <li key={index}>{genero}</li> )}
          </ul>
        </td>
        <td>{props.premios}</td>
      </tr>
    </>
  );
};
