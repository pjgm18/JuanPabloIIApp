import React from 'react';
import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';
import { ReactComponent as EditSVG } from './edit.svg';
import './TodoIcon.css';

const iconTypes = {
  "check": color => (
    <CheckSVG className="Icon-svg Icon-svg--check" fill={color} />
  ),
  "delete": color => (
    <DeleteSVG className="Icon-svg Icon-svg--delete" fill={color} />
  ),
  "edit": color => (
    <EditSVG className="Icon-svg Icon-svg--edit" fill={color} />
  ),
};

function TodoIcon({ type, color = 'gray', onClick }) {
  return (
    <span
      //Dependiendo de la propiedad type agregamos una clase con los estlos de CSS a la etiqueta span
      className={`Icon-container Icon-container--${type}`}
      onClick={onClick}
    >
      {/* Mostramos un SVG de los que estan en el objeto iconTypes*/}
      {iconTypes[type](color)} 
    </span>
  );
}

export { TodoIcon };
