import { useState } from "react"


export const AddCategorys = ({onNewCategorys}) => {
    
    const [inputValue, setinputValue] = useState('')
    const InputChage = ({target}) => {
            setinputValue(target.value)
    }

    const onSumbit = (event) => {
        event.preventDefault();
        
        if(inputValue.trim().length <= 1)return;
        // setCategories((categories) => [...categories , inputValue])
        onNewCategorys(inputValue.trim());
        setinputValue('');

    }
  return (
    <form onSubmit={onSumbit}>
         <input 
        type="text" 
        placeholder="Buscar Gift"
        value={inputValue}
        onChange={InputChage}
            />
    </form>
  )
}
