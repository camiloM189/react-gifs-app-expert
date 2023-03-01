import { useState } from "react";
import { AddCategorys,GifGrid } from "./components";


export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['one piece']);
    const onAddCategory = (NewCategorys) =>{
        
        if(categories.includes(NewCategorys.toLowerCase()) ) return;
        setCategories([NewCategorys.toLowerCase(), ...categories])
    };
    return(
        <>
       
        <h1>GifExpertApp</h1>

   
        <AddCategorys 
        // setCategories={setCategories} 
          onNewCategorys = { onAddCategory }    
         />
                {
                categories.map(( category ) => 
                     (
                        <GifGrid key={category}
                         category={category}
                         />
                    )
                )
                }
                
        </>
    );
};