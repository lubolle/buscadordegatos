import React from "react";
import "./search-box.style.css"

export const SearchBox = ({placeholder, handleChange}) => (
    <input 
        className="search"
      type="search" 
      placeholder={placeholder}
      //e = evento onChange lo usamos para detectar que hubo un cambio en el DOM*
      onChange={handleChange}
      />
)