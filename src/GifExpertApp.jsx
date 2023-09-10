//import React from 'react'

import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    // escribir usestate y hacer tab rapidamente
    const [categories, setCategories] = useState(['One Punch']);

    //console.log(categories);

    const onAddCategory = (newCategory) => {

        if ( categories.includes(newCategory) ) return;
        //console.log(newCategory);
        setCategories([newCategory, ...categories]);
        //Valorant
        //setCategories([newCategory, ...categories]);
       //categories.push(newCategory);
        //Otra forma de hacerlo
        //setCategories( cat => [...cat, 'Valorant']);
        //setCategories(['Valorant', ...categories]);
        //categories.push('Valorant'); (no se debe usar)
        //console.log('Valorant')
    }

  return (
    <>
    {/* title */}
    <h1>GifExpertApp</h1>

    {/* input */}
    <AddCategory 
        // setCategories={ setCategories }
        onNewCategory={ (value) => onAddCategory(value)}
    />

    {/* Listado de Gif
        Gif Item */}
        {/* <button onClick={onAddCategory}>Agregar</button> */}

        { categories.map( category => ( 
            <GifGrid 
                key={ category } 
                category = { category } /> 
            ))
        }
        {/* <li>ABC</li> */}





    </>
  )
}
