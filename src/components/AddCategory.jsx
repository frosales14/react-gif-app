import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('one punch man')

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const newCategoryvalue = inputValue.trim(); 
        if(newCategoryvalue.length <= 1) return;
        onNewCategory( newCategoryvalue )
        setInputValue('');
    }

  return (
    <form onSubmit={onSubmit}>
        <input 
            type="text"
            placeholder="Buscar Gifs" 
            value={inputValue}
            onChange={onInputChange}
        />
    </form>
  )
}
