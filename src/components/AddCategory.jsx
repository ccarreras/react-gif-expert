import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState('');

    //en vez de poner asi const onInputChange = (event) => { puedo poner
    const onInputChange = ({target}) => {
        //console.log(event.target.value);
        //setinputValue(event.target.value);
        setinputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if ( inputValue.trim().length <= 1) return;
        // console.log(inputValue)
        //setCategories(categories => [inputValue, ...categories]);
        onNewCategory(inputValue.trim());
        setinputValue('');
    }
  return (
    <form onSubmit={ onSubmit }>
        <input 
            type="text"
            placeholder="Buscar Gifs"
            value = {inputValue}
            //onChange = {(event) => onInputChange (event)}
            onChange = { onInputChange }
        />
    </form>
  )
}
