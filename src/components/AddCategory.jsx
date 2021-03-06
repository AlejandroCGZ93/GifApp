import { useState } from 'react';
import PropType from 'prop-types';

export const AddCategory = ({ addCategory }) =>{

    const [inputValue,setInputValue] = useState('');

    
    const handleInputChange = ({ target }) =>{
        setInputValue(target.value);
        
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(inputValue.trim().length < 1) return;
        
        addCategory(inputValue.trim());
        setInputValue('')
        
    }
    
  
    return(
        <>
        <form onSubmit={handleSubmit} aria-label='form'>
            <input
                type='search'
                placeholder='Buscar Gif'
                value={inputValue}
                onChange={handleInputChange}
            />
               
        </form>


        </>
        
    )
}

 AddCategory.propType = {
    addCategory: PropType.func.isRequired,
    
}