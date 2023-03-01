import { useEffect, useState } from 'react';
import {getGif} from '../helpers/getGifs'

export const useFetchGifs = (category) => {
        
const [images, setnewImages] = useState([]);
const [isLoanding, setIsLoanding] = useState(true);
 

 const getImages = async() =>{
     const newImages = await getGif(category);
        setnewImages(newImages);
        setIsLoanding(false);

}
useEffect( () => {
    getImages();
 },[])

    return{
        images,
        isLoanding
    }
}
